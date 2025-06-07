'use client';

import { FormModal } from './form-modal';

export const CreateProgress = () => {
  return (
    <div className="px-2">
      <div
        className="bg-white flex items-center justify-between border border-gray-1200 px-3 w-full h-12 rounded-md shadow-[0px_0px_32px_0px_#dae7f5]
"
      >
        <span className="text-sm text-dark font-medium">创建任务进度</span>
        <FormModal />
      </div>
    </div>
  );
};
