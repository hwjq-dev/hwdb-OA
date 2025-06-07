import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { List } from './list';

export const ProgressList = () => {
  return (
    <>
      <div className="px-2 mt-2 pb-20">
        <div className="shadow-[0px_10px_13px_0px_#edf4fa] border border-gray-200 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-dark">
              任务编号 <span className="text-sm font-medium"> # 2025010605</span>
            </p>
            <button>
              <Bell className="size-6 text-red-600" />
            </button>
          </div>

          <div className="mt-6">
            <List />
          </div>
        </div>

        <div className="shadow-[0px_-10px_31px_0px_#d6d2d2] fixed left-0 right-0 w-full z-50 bg-white bottom-0">
          <div className="py-3 flex justify-center items-center">
            <Button>提交完成任务</Button>
          </div>
        </div>
      </div>
    </>
  );
};
