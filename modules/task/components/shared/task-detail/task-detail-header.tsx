import { Clock, User } from 'lucide-react';

import { getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';

import { HaftProgressChart } from '../haft-progress-chart';
import { TaskStatusType } from '../task/interface';
import { getIcon, TaskStatusData } from '../task/task-status';

interface Props {
  status: TaskStatusType;
  startAt: string;
  endAt: string;
  assigneeOrassigner: string;
}

export const TaskDetailHeader: React.FC<Props> = (props) => {
  return (
    <div className="relative grid grid-cols-5 gap-3 shadow-[0px_0px_32px_0px_#dae7f5] m-2 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center col-span-2">
        <div className="relative">
          <HaftProgressChart />
          <Status status={props.status as never} />
        </div>
      </div>

      <div className="absolute h-3/5 border-r border-gray-200 border-dashed left-[36%] top-1/2 -translate-y-1/2" />

      <div className="py-4 col-span-3">
        <p className="font-semibold pb-2">任务状态</p>
        <div className="space-y-2">
          <div className="flex space-x-2 items-center">
            <div className="flex items-center space-x-1.5">
              <Clock className="text-primary size-4" />
              <span className="text-xs font-bold text-primary">开始时间</span>
            </div>
            <p className="text-xs text-dark">{getFormatDatetime(new Date(props.startAt))}</p>
          </div>

          <div className="flex items-center space-x-1.5">
            <div className="flex items-center space-x-1.5">
              <Clock className="text-primary size-4" />
              <span className="text-xs font-bold text-primary">截止时间</span>
            </div>
            <p className="text-xs text-dark">{getFormatDatetime(new Date(props.endAt))}</p>
          </div>
        </div>

        <div className="flex items-center space-x-1 mt-2">
          <User className="size-4 text-primary" />
          <span className="text-xs mt-0.5 text-dark">{props.assigneeOrassigner}</span>
        </div>
      </div>
    </div>
  );
};

const Status: React.FC<{ status: TaskStatusType }> = ({ status }) => {
  const Icon = getIcon(status);
  const label = TaskStatusData[status];

  return (
    <div className="absolute top-4/6 left-6">
      <p className="bg-gray-800 relative px-4.5 text-sm py-1.5 rounded-2xl text-white flex space-x-2 items-center">
        <span className="p-1 bg-white rounded-full absolute left-1 top-1 shadow-md">
          <Icon
            className={cn(
              'size-4',
              { 'text-orange-500': status == 'approved' },
              { 'text-green-500': status == 'done' },
              { 'text-gray-500': status == 'wait-approval' },
              { 'text-primary': status == 'in-progress' },
              { 'text-red-500': status == 'overdue' },
            )}
          />
        </span>
        <span className="ml-4 font-medium">{label}</span>
      </p>
    </div>
  );
};
