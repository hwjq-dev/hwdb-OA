import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

import { CircularProgressBar } from '@/components/molecules/circular-progress-bar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import lottieAnimateRotate from '@/public/lotties/lottie-2.json';

export const HeadStats = () => {
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

      <p className="text-white text-xl font-bold text-center">任务</p>
      <div className="absolute bottom-0 translate-y-1/4 right-0 left-0 rounded-2xl bg-white h-28 mx-2 shadow-[0px_2px_28px_-5px_#78cbff] z-30">
        <div className="relative grid h-full grid-cols-2 p-3">
          <div className="flex items-center my-auto">
            <div className="space-y-2">
              <p className="font-semibold text-sm">完成分配任务</p>
              <Button size="sm" className="rounded-md !h-7 bg-green-500" asChild>
                <Link href="#">详情查看</Link>
              </Button>
            </div>
            <CircularProgressBar size={90} value={(4 / 5) * 100} small />
          </div>
          <div className="absolute left-1/2 h-3/5 top-1/2 -translate-y-1/2 border-r-[1px] border-dashed border-r-gray-300" />
          <div className="p-4 m-auto">
            <p className="font-semibold text-sm">现有审批任务</p>
            <p className="text-orange font-semibold text-2xl">7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ItemProps {
  label: string;
  value: string;
  type: 'current' | 'wait-approval' | 'overdue';
}

const Item: React.FC<ItemProps> = ({ label, value, type = 'current' }) => {
  return (
    <div className="stats-border flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-fit space-y-1">
        <p className="text-sm font-medium text-dark">{label}</p>
        <div
          className={cn('rounded-full  border-[0.5px]  size-8 flex justify-center items-center', {
            'bg-green/5 border-green-400/50': type === 'current',
            'bg-orange/5 border-orange/50': type === 'wait-approval',
            'bg-red-700/5 border-red-600/50': type === 'overdue',
          })}
        >
          <span
            className={cn(
              'text-sm font-bold',
              { 'text-green-400': type === 'current' },
              { 'text-orange-300': type === 'wait-approval' },
              { 'text-red': type === 'overdue' },
            )}
          >
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};
