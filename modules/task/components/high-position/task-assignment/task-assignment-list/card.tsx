import { Clock, User } from 'lucide-react';

import { getFormatDatetime, getFormatHumanReadable } from '@/lib/dayjs';

import { Priority } from '../../../shared/task/priority';
import { TaskAssignmentDelete } from '../task-assignment-delete';
import { TaskAssignmentUpdate } from '../task-assignment-update';

export const TaskAssignmentCard: React.FC<TaskProps> = (props) => {
  const { tgId, title, subtitle, assignedAt, assignee, endAt, startAt, priority } = props;

  return (
    <div className="relative border-[1px] bg-white rounded-md px-2 py-4 shadow-[0px_4px_19px_0px_rgba(0,_0,_0,_0.1)]">
      {/*--- priority ---*/}
      <Priority type={priority} />

      {/*--- assign period ---*/}
      <div className="py-1.5 px-3 absolute top-0 right-0 flex items-center space-x-2">
        <div className="flex space-x-1">
          <User className="size-4 text-primary" />
          <span className="text-dark text-sm">
            <span className="mx-1">{assignee}</span>
          </span>
        </div>

        <div className="border-r border-dashed w-0.5 h-3" />

        <div className="flex items-center space-x-1">
          <Clock className="size-4 text-primary stroke-2" />
          <span className="text-sm text-dark">{getFormatHumanReadable(new Date(assignedAt))}</span>
        </div>
      </div>

      {/*--- title ---*/}
      <div className="mt-4">
        <div className="grid grid-cols-12">
          <div className="col-span-8 space-y-1.5">
            <p className="font-bold line-clamp-2">
              {title} <span>#{tgId}</span>
            </p>
            <p className="text-sm line-clamp-1 text-dark">{subtitle}</p>
          </div>
          <div className="col-span-4 my-auto ml-auto">
            <TaskAssignmentUpdate {...props} />
            <TaskAssignmentDelete />
          </div>
        </div>

        {/* <TaskStatus type={status} /> */}

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
