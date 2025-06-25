export default async function fetchApi(path: string, options?: any) {
  const basePath = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
  const header = {};

  try {
    const response = await fetch(basePath, {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (!response.ok) throw new Error('Something went wrong.');
  } catch (error) {
    if (error instanceof Error) console.log(error?.message);
    return null;
  }
}
