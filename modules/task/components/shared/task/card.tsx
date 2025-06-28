import { IconAlarm, IconClock, IconUserCheck } from '@tabler/icons-react';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getDiff, getFormatDatetime } from '@/lib/dayjs';

import { Priority } from './priority';
import { TaskStatus } from './task-status';

export const Card: React.FC<TaskCardProps & { variant: '上级' | '下级' }> = (props) => {
  const timeLeft = getDiff(new Date(props.startTime), new Date(props.completeTime)).trim();

  return (
    <div className="relative bg-white border border-gray-200/70 rounded-xl pt-5 overflow-hidden">
      {/*--- priority ---*/}
      <Priority type={props.priority} />
      {timeLeft && <div className="text-[10px] absolute left-24 top-2.5">剩余 {timeLeft}</div>}
      {/*--- assign period ---*/}
      <div className="py-1.5 px-3 absolute top-0.5 right-0 flex items-center space-x-5">
        <div className="flex items-center space-x-1 bg-gray-100 px-2 py-0.5 rounded-full">
          <IconAlarm className="size-5 text-primary stroke-2" />
          <span className="text-xs text-dark">{props.timeAgo}</span>
        </div>
      </div>

      {/*--- title ---*/}
      <div className="mt-4">
        <div className="grid grid-cols-12 px-3">
          <div className="col-span-8 space-y-1.5">
            <div className="flex flex-col space-y-1">
              <p className="text-xs text-dark">
                <span className="text-gray-800 font-semibold">编号</span>
                <span className="font-light text-[11px] ml-2">#{props.taskNumber}</span>
              </p>
              <p className="font-bold text-gray-800 line-clamp-2 text-sm">{props.title}</p>
              <div className="flex items-center py-1">
                <div className="flex space-x-1 py-1 bg-gradient-to-r from-fuchsia-800 to-fuchsia-600 px-2 items-center border-l border-t border-b border-fuchsia-800">
                  <IconUserCheck className="size-4 text-white" />
                  <span className="text-white text-xs">
                    {props.variant === '下级'
                      ? `申请人 ${props.assignee}`
                      : `审核人 ${props.assigner}`}
                  </span>
                </div>
                <TaskStatus type={props.status} />
              </div>
            </div>
          </div>

          <div className="col-span-4 my-auto ml-auto">
            <Button
              size="sm"
              className="rounded-full bg-gradient-to-r from-primary to-primary-500 !text-xs px-2 cursor-pointer"
            >
              <span>查看详情</span>
              <span className="bg-white p-1 rounded-full">
                <ArrowRight className="size-3 text-orange" />
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-2 flex justify-between bg-primary-200/40 py-1.5 px-3">
          <div className="flex flex-col text-[11px]">
            <span className="text-primary font-semibold flex items-center space-x-1">
              <IconClock className="size-3" />
              <span> 开始时间</span>
            </span>
            <span className="text-[10px]">
              {getFormatDatetime(new Date(props.startTime as never))}
            </span>
          </div>
          <div className="flex flex-col text-[11px]">
            <span className="text-primary font-semibold flex items-center space-x-1">
              <IconClock className="size-3" />
              <span> 截止时间</span>
            </span>
            <span className="text-[10px]">
              {getFormatDatetime(new Date(props.completeTime as never))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
