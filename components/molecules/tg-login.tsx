'use client';

import WebApp from '@twa-dev/sdk';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ROUTES } from '@/config/route';
import { useAuthStore } from '@/hooks/use-auth';

interface Data {
  id: number;
  nickname: string;
  job_number: string;
  job_title: string;
  department_id: number;
  position_level: number;
  department_text: string;
  position_level_text: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

interface InitDataResponse {
  code: string | number;
  msg: string;
  data: Data;
}

export const TgLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const { setData, clearData } = useAuthStore();

  useEffect(() => {
    try {
      if (typeof window != 'undefined') {
        const isTelegramEnvironment =
          typeof window !== 'undefined' &&
          typeof WebApp !== 'undefined' &&
          typeof WebApp.initDataUnsafe?.user !== 'undefined';

        if (!isTelegramEnvironment) {
          window.location.assign('https://google.com/');
          return;
        }

        const userTg = WebApp?.initData;
        WebApp.ready();

        // Authenticate to OA backend
        (async () => {
          try {
            const authenticatedResponse = await fetch('https://tstoaadmin.57db.com/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ initData: userTg }),
            });

            const userAuthenticatedData = (await authenticatedResponse.json()) as InitDataResponse;

            if (userAuthenticatedData.code !== 200) throw new Error('Something went wrong.');

            //-- If no error while login with backend -> remove old local storage
            clearData();

            //-- Set new tokens to local storage
            const data = userAuthenticatedData?.data || {};
            setData(data);

            //-- Redirect to homepage
            setIsLoading(false);
            router.replace(ROUTES.HR);
          } catch (error) {
            window.location.assign('https://google.com/');
            alert(error);
          }
        })();
      }
    } catch (error) {
      setIsLoading(false);
      return window.location.assign('https://google.com/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading)
    return (
      <div className="bg-primary animate-pulse !size-full flex justify-center items-center">
        加载...
      </div>
    );

  return null;
};
