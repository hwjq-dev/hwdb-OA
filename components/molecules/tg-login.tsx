'use client';

import WebApp from '@twa-dev/sdk';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { sleep } from 'radash';
import { useEffect, useState } from 'react';

import { ROUTES } from '@/config/route';
import { useAuthStore } from '@/hooks/use-auth';
import splash from '@/public/lotties/splash-screen-2.json';

const LottiePlayer = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false },
);

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
            await sleep(3000);
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
      <div className="bg-radial from-primary-400 via-60 via-primary-500 to-primary !size-full flex justify-center items-center">
        <div className="absolute top-1/4 right-1/2 w-28 h-auto z-10">
          <LottiePlayer
            autoplay
            loop
            className="flex justify-center size-56 items-center"
            src={splash}
            speed={1}
          />
        </div>
        <div className="space-y-1 mt-8">
          <p className="text-white text-center font-bold text-xl mt-28 animate-pulse">
            OA 系统小程序
          </p>
          <p className="text-center text-xs text-gray-100 animate-pulse">优化办公运营</p>
        </div>
        <span className="absolute px-3 rounded-sm py-1 bg-black/10 w-fit mx-auto bottom-3 right-0 left-0 text-xs text-center text-white">
          版本 <span className="text-gray-300">V1.0.1</span>
        </span>
      </div>
    );

  return null;
};
