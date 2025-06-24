'use client';

import { Player } from '@lottiefiles/react-lottie-player';

import { cn } from '@/lib/utils';
import lottieAnimateRotate from '@/public/lotties/lottie-2.json';

export const LowPositionStats = () => {
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

      <div className="absolute bottom-0 translate-y-1/4 right-0 left-0 w-5/6 rounded-2xl h-20 mx-auto z-30">
        <div className="grid h-full grid-cols-3 gap-x-4">
          <Item type="current" label="现有任务" value="2" color="green" />
          <Item type="wait-approval" label="审核中任务" value="1" color="orange" />
          <Item type="overdue" label="已超时任务" value="5" color="red" />
        </div>
      </div>
    </div>
  );
};

interface ItemProps {
  label: string;
  value: string;
  type: 'current' | 'wait-approval' | 'overdue';
  color?: 'red' | 'green' | 'orange';
}

const Item: React.FC<ItemProps> = ({ label, value, type = 'current', color }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden flex items-center justify-center shadow-[0px_2px_28px_-5px_#78cbff] rounded-md',
        {
          'bg-gradient-to-br from-red-600 to-red-500': color == 'red',
          'bg-gradient-to-br from-green-600 to-green-500': color == 'green',
          'bg-gradient-to-br from-orange-600 to-orange-500': color == 'orange',
        },
      )}
    >
      <div className="flex flex-col justify-center items-center w-fit space-y-1">
        <p className="text-sm font-medium text-white">{label}</p>
        <div className={cn('h-7 w-9 flex justify-center items-center bg-white rounded-sm')}>
          <span
            className={cn(
              'text-lg font-bold',
              { 'text-green-500': type === 'current' },
              { 'text-orange-500': type === 'wait-approval' },
              { 'text-red-500': type === 'overdue' },
            )}
          >
            {value}
          </span>
        </div>
      </div>
      <div className="absolute size-10 bg-white/20 rounded-full bottom-0 -right-6" />
      <div className="absolute size-10 bg-white/20 rounded-full -bottom-5 -right-2" />
    </div>
  );
};
