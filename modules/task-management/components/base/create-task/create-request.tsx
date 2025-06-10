'use client';

import { FormModal } from './from-modal';

export const CreateRequest = () => {
  return (
    <div className="space-y-2">
      {/* <div className="border-l-4 rounded-xs border-primary/90 pl-2">
        <p className="font-medium text-gray-800">所有任务</p>
      </div> */}
      <div
        className="bg-white flex items-center justify-between border border-gray-1200 px-3 w-full h-12 rounded-md shadow-[0px_2px_56px_-13px_#a3b0b8]
"
      >
        <span className="text-sm text-dark font-medium">申请任务</span>
        <FormModal />
      </div>
    </div>
  );
};
