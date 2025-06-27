import { ArrowRight, Clock, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getFormatDatetime } from '@/lib/dayjs';

import { Priority } from './priority';
import { TaskStatus } from './task-status';

export const Card: React.FC<TaskProps & { showAssignee?: boolean }> = (props) => {
  const {
    title,
    // subtitle,
    priority,
    status,
    tgId,
    assigner,
    assignee,
    showAssignee,
    assignedAt,
    startAt,
    endAt,
  } = props;

  return (
    <div className="relative border-[1px] bg-white rounded-md px-2 py-4 shadow-[0px_4px_19px_0px_rgba(0,_0,_0,_0.1)]">
      {/*--- priority ---*/}
      <Priority type={priority} />

      {/*--- assign period ---*/}
      <div className="py-1.5 px-3 absolute top-0 right-0 flex items-center space-x-5">
        <div className="flex space-x-1">
          <User className="size-4 text-primary" />
          <span className="text-dark text-sm">
            <span> {showAssignee ? assignee : assigner}</span>
          </span>
        </div>

        <div className="border-r border-dashed w-0.5 h-3" />

        <div className="flex items-center space-x-1.5">
          <Clock className="size-4 text-primary stroke-2" />
          <span className="text-sm text-dark">{assignedAt}</span>
        </div>
      </div>

      {/*--- title ---*/}
      <div className="mt-4">
        <div className="grid grid-cols-12">
          <div className="col-span-9 space-y-1.5">
            <p className="font-bold line-clamp-2">
              {title} <span className="text-sm">#{tgId}</span>
            </p>
            {/* <p className="text-sm line-clamp-1 text-dark">{subtitle}</p> */}
          </div>
          <div className="col-span-3 my-auto ml-auto">
            <Button size="sm" className="rounded-full !text-[12px] px-2">
              查看详情
              <span className="bg-white p-1 rounded-full">
                <ArrowRight className="size-3 text-orange" />
              </span>
            </Button>
          </div>
        </div>

        <TaskStatus type={status} />

        <div className="mt-2 flex justify-between">
          <div className="flex items-center space-x-1 text-[10px]">
            <span className="text-primary font-semibold">开始时间：</span>
            <span>{getFormatDatetime(new Date(startAt as never))}</span>
          </div>
          <div className="border-r border-dashed" />
          <div className="flex items-center space-x-1 text-[10px]">
            <span className="text-primary font-semibold">截止时间：</span>
            <span>{getFormatDatetime(new Date(endAt as never))}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
