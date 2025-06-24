'use client';

import { Player } from '@lottiefiles/react-lottie-player';

import { getChineseGreeting } from '@/lib/dayjs';
import lottieAnimateRotate from '@/public/lotties/lottie-2.json';

export const HrHeaderSection = () => {
  const greetingShift = getChineseGreeting();

  return (
    <div className="tornado-pattern relative w-full h-28 z-0 bg-primary p-5">
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
        <p className="text-white text-xl font-bold z-50">OA系统</p>
        <p className="text-gray-200 text-xs font-medium">提供现代办公的专业操作</p>
      </div>

      <div className="absolute z-50 right-2 top-3 rounded-xl pl-6 pr-3 py-1.5 bg-primary/10 backdrop-blur-2xl">
        <p className="text-white text-base font-bold z-50 text-end">{greetingShift}，明华</p>
        <p className="text-gray-200 text-xs mt-0.5 font-medium text-end">TG-456370987</p>
      </div>
    </div>
  );
};
