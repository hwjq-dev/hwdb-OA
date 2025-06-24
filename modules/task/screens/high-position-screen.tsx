'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import {
  HighPositionFilter,
  HighPositionList,
  HighPositionMenu,
  HighPositionStats,
} from '../components/high-position';

export const HighPositionScreen = () => {
  const router = useRouter();

  return (
    <div className="relative size-full overflow-hidden">
      <div
        role="button"
        onClick={() => router.back()}
        className="absolute z-20 left-4 top-8 -translate-y-1/2 flex items-center space-x-1.5"
      >
        <button className="cursor-pointer p-1.5 bg-gray-400/30 backdrop-blur-2xl rounded-full ">
          <ChevronLeft className="stroke-3 size-5 text-white" />
        </button>
        <span className="text-white font-medium text-sm">返回</span>
      </div>

      <HighPositionStats />
      <HighPositionMenu />

      <div className="border-l-4 rounded-xs border-primary/90 pl-2 mx-2 mt-2">
        <p className="font-medium text-gray-800">所有审核下级任务</p>
      </div>
      <HighPositionFilter />
      <HighPositionList />
    </div>
  );
};
