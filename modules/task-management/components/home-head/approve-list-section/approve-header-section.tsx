import { Clock, User } from 'lucide-react';

import { CircularProgressBar } from '@/components/molecules/circular-progress-bar';

export const ApproveHeaderSection = () => {
  return (
    <div className="relative grid grid-cols-2 gap-3 shadow-[0px_0px_32px_0px_#dae7f5] m-2 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <CircularProgressBar size={110} value={(4 / 5) * 100} color="green" />
        <div className="flex flex-col space-y-1.5 pr-3">
          <span className="font-semibold text-sm">总数任务</span>
          <span className="text-center text-dark text-sm">4/5</span>
        </div>
      </div>

      <div className="absolute h-3/5 border-r border-gray-200 border-dashed left-1/2 top-1/2 -translate-y-1/2" />

      <div className="pl-5 py-4">
        <div className="space-y-2">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-1.5">
              <Clock className="text-primary size-4" />
              <span className="text-xs font-bold text-primary">开始时间</span>
            </div>
            <p className="text-xs text-dark">2025 5月 10日 8:30:01</p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center space-x-1.5">
              <Clock className="text-primary size-4" />
              <span className="text-xs font-bold text-primary">截止时间</span>
            </div>
            <p className="text-xs text-dark">2025 5月 10日 5:30:01</p>
          </div>
        </div>

        <div className="flex items-center space-x-1 mt-2">
          <User className="size-4 text-primary" />{' '}
          <span className="text-xs mt-0.5 text-dark">由主管分配</span>
        </div>
      </div>
    </div>
  );
};
