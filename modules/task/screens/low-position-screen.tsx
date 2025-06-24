'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { LowPositionStats } from '../components/low-position/low-position-stats';
import { LowPositionTabSectionList } from '../components/low-position/low-position-tab-section-list';

export const LowPositionScreen = () => {
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

      <div className="min-h-[184px]">
        <LowPositionStats />
      </div>
      {/* <div className="mt-10 mx-2">
        <CreateTaskForm />
      </div> */}
      <div className="relative">
        <LowPositionTabSectionList />
      </div>
    </div>
  );
};
