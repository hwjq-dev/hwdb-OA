'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import lottieAnimateRotate from '@/public/lotties/lottie-2.json';

interface Props extends PropsWithChildren {
  headerLabel: string;
  className?: string;
  showBack?: boolean;
}

export const ScreenContainer: React.FC<Props> = ({
  headerLabel,
  className,
  children,
  showBack = false,
}) => {
  const router = useRouter();

  return (
    <div className={cn('relative', className)}>
      {showBack && (
        <button
          onClick={() => router.back()}
          className="cursor-pointer p-1.5 z-20 bg-gray-400/30 backdrop-blur-2xl rounded-full absolute left-4 top-11 -translate-y-1/2"
        >
          <ChevronLeft className="stroke-3 size-5 text-white" />
        </button>
      )}

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
