'use client';

import { Player } from '@lottiefiles/react-lottie-player';

import lottieAnimateRotate from '@/public/lotties/lottie-2.json';

export const NotificationHeaderSection = () => {
  return (
    <div className="tornado-pattern relative w-full h-36 bg-primary p-5 -z-10">
      <div className="absolute top-3 right-5 w-28 h-auto z-10">
        <Player
          autoplay
          loop
          className="flex justify-center items-center"
          src={lottieAnimateRotate}
          speed={0.12}
        />
      </div>

      <div className="absolute top-3 left-5 w-28 h-auto z-10">
        <Player
          autoplay
          loop
          className="flex justify-center items-center"
          src={lottieAnimateRotate}
          speed={0.12}
        />
      </div>
      <div className="absolute z-50 left-1 top-3 rounded-xl pl-3 pr-6 py-1.5 bg-primary/10 backdrop-blur-2xl">
        <p className="text-white text-xl font-bold z-50">欢迎来到好旺OA</p>
        <p className="text-gray-200 text-xs font-bold">提供现代办公的专业操作</p>
      </div>

      <div className="absolute z-50 right-2 top-3 rounded-xl pl-6 pr-3 py-1.5 bg-primary/10 backdrop-blur-2xl">
        <p className="text-white text-base font-bold z-50 text-end">明华</p>
        <p className="text-gray-200 text-xs font-bold">TG-456370987</p>
      </div>
    </div>
  );
};
