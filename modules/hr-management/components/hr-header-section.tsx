'use client';

import { Player } from '@lottiefiles/react-lottie-player';

import lottieAnimateRotate from '@/public/lotties/lottie-2.json';

export const HrHeaderSection = () => {
  return (
    <div className="tornado-pattern relative w-full h-36 bg-primary rounded-b-5xl p-5">
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

      <p className="text-white text-xl font-bold text-center">审批</p>
    </div>
  );
};
