'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import lottieAnimateRotate from '@/public/lotties/lottie-2.json';

interface Props extends PropsWithChildren {
  headerLabel: string;
  className?: string;
}

export const ScreenContainer: React.FC<Props> = ({ headerLabel, className, children }) => {
  return (
    <div className={cn('relative', className)}>
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
        <p className="text-center text-lg font-semibold text-white pt-3">{headerLabel}</p>
      </div>

      <div className="bg-white -translate-y-16 rounded-t-4xl h-[84dvh] p-4 overflow-hidden">
        {children}
      </div>
    </div>
  );
};
