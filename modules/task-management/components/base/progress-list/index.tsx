'use client';

import { ReactNode, useState } from 'react';

import { List } from './list';

interface Props {
  disableBullAction?: boolean;
  notificationButton: ReactNode;
}

export const ProgressList: React.FC<Props> = ({
  disableBullAction = false,
  notificationButton,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="px-2 mt-2 pb-20">
        <div className="shadow-[0px_10px_13px_0px_#edf4fa] border border-gray-200 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="font-semibold">
              任务编号 <span className="text-sm font-medium"> # 2025010605</span>
            </p>

            {notificationButton}
          </div>

          <div className="mt-6">
            <List disableBullAction={disableBullAction} />
          </div>
        </div>
      </div>
    </>
  );
};
