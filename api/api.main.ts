import { useAuthStore } from '@/hooks/use-auth';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Options {
  method?: HttpMethod;
  body?: Record<string, any> | FormData;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
}

const basePath = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default async function fetchApi<T = any>(
  path: string,
  options: Options = {},
): Promise<T | null> {
  //-- Get accessToken & refreshToken
  const { data, updateTokens } = useAuthStore.getState();

  try {
    if (!data?.access_token && !data?.refresh_token) throw new Error('未授权的请求');

    //-- Try fetch for the first attemp
    const response = await refetch({
      url: `${basePath}${path}`,
      accessToken: data?.access_token as never,
      options: options,
    });

    //--- If authorization failed caused expiry access token
    if (response?.tokenExpired) {
      const newTokens = (await refreshAccessToken(
        data.refresh_token as never,
        data.access_token as never,
      )) as TokensProps;

      if (newTokens.code != 200) throw new Error('不能刷新 access token');

      const response = await refetch({
        url: `${basePath}${path}`,
        accessToken: newTokens.data.access_token as never,
        options: options,
      });

      updateTokens({
        accessToken: newTokens.data.access_token,
        refreshToken: newTokens.data.refresh_token,
      });

      return response?.response;
    }

    return response?.response;
  } catch (error) {
    if (error instanceof Error) alert(`请求失败 : ${error.message}`);
    return null;
  }
}

//--- Retry fetch data when access token expired
async function refetch(args: { url: string; accessToken: string; options: Options }) {
  try {
    const ResolveResponse = await fetch(`${args.url}`, {
      method: args.options.method || 'POST',
      body: args.options.body ? JSON.stringify(args.options?.body as any) : '',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${args.accessToken}`,
        ...args.options.headers,
      },
    });

    if (!ResolveResponse.ok) throw new Error('出现错误.');

    const response = await ResolveResponse.json();

    //-- If Api access token expired
    if (response?.code == 10000)
      return {
        tokenExpired: true,
        response: null,
      };

    return {
      tokenExpired: false,
      response,
    };
  } catch (error) {
    if (error instanceof Error) alert(`请求失败 : ${error.message}`);
    return null;
  }
}

interface TokensProps {
  code: number;
  msg: string;
  data: { expires_in: number; access_token: string; refresh_token: string };
}

async function refreshAccessToken(refreshToken: string, accessToken: string) {
  try {
    const resolveResponse = await fetch(`${basePath}/refresh_token`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });

    if (!resolveResponse.ok) throw new Error('不能刷新 access token.');
    const response = await resolveResponse.json();
    return response;
  } catch (error) {
    if (error instanceof Error) alert(`请求失败 : ${error.message}`);
    return null;
  }
}
