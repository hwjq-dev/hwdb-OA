import {
  CircleCheckBig,
  CircleDotDashed,
  CircleEllipsis,
  Clock,
  ClockAlert,
  FileCheck,
  Tag,
  User,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PriorityType = 'high' | 'medium' | 'low';
type TaskStatusType = 'inprogress' | 'done' | 'wait-approval' | 'approved' | 'overdue';

export interface Props {
  variant: '下级' | '上级';
  taskId: string;
  priority: PriorityType;
  status: TaskStatusType;
  title: string;
  subtitle: string;
  assignPeriod: string;
  startDate: string;
  endDate: string;
  assignerOrAssignee: string;
  tgUsername?: string;
  link?: string;
}

export const Card: React.FC<Props> = (props) => {
  const {
    variant = '下级',
    taskId,
    priority,
    status,
    title,
    subtitle,
    assignPeriod,
    startDate,
    endDate,
    assignerOrAssignee,
    tgUsername,
    link,
  } = props;

  return (
    <Link href={link || '#'}>
      <div className="relative border-[1px] bg-white rounded-md px-2 py-4 shadow-[0px_4px_19px_0px_rgba(0,_0,_0,_0.1)]">
        {/*--- priority ---*/}
        <Priority type={priority} />

        {/*--- assign period ---*/}
        <div className="py-1.5 px-3 absolute top-0 right-0 flex items-center space-x-5">
          <div className="flex space-x-1">
            <User className="size-4 text-primary" />
            <span className="text-dark text-sm">
              {assignerOrAssignee}
              {variant === '上级' && <span className="mx-1">/</span>}
              {variant === '上级' && <span>{tgUsername}</span>}
            </span>
          </div>
          {variant === '上级' && (
            <div className="flex items-center space-x-1.5">
              <Clock className="size-4 text-primary stroke-2" />
              <span className="text-sm text-dark">{assignPeriod}</span>
            </div>
          )}
        </div>

        {/*--- title ---*/}
        <div className="mt-4">
          <div className="grid grid-cols-12">
            <div className="col-span-9 space-y-1.5">
              <p className="font-bold line-clamp-2">
                {title} <span className="text-sm">{taskId}</span>
              </p>
              <p className="text-sm line-clamp-1 text-dark">{subtitle}</p>
            </div>
            <div className="col-span-3 my-auto ml-auto">
              <Button size="sm" className="rounded-full !text-sm px-4">
                查看进度
              </Button>
            </div>
          </div>

          <TaskStatus type={status} />

          <div className="mt-2 flex justify-between">
            <div className="flex items-center space-x-1 text-[10px]">
              <span className="text-primary font-semibold">开始时间：</span>
              <span>{startDate}</span>
            </div>
            <div className="border-r border-dashed" />
            <div className="flex items-center space-x-1 text-[10px]">
              <span className="text-primary font-semibold">结束时间：</span>
              <span>{endDate}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const PriorityStatusData: Record<PriorityType, string> = {
  high: '高优先',
  medium: '中优先',
  low: '低优先',
};

const Priority: React.FC<{ type: PriorityType }> = ({ type }) => {
  const label = PriorityStatusData[type];
  return (
    <div
      className={cn(
        'flex items-center space-x-1 w-fit py-0.5 px-3 absolute top-0 left-0 rounded-tl-md',
        { 'bg-red-500': type === 'high' },
        { 'bg-orange-500': type === 'medium' },
        { 'bg-green-500': type === 'low' },
      )}
    >
      <span className="text-white">
        <Tag className="size-4" />
      </span>
      <span className="text-sm text-white font-medium">{label}</span>
    </div>
  );
};

const TaskStatusData: Record<TaskStatusType, string> = {
  inprogress: '执行中',
  done: '已完成',
  'wait-approval': '审批中',
  approved: '已审批',
  overdue: '已超时',
};

const TaskStatus: React.FC<{ type: TaskStatusType }> = ({ type }) => {
  const Icon = getIcon(type);
  const label = TaskStatusData[type];
  return (
    <div className="flex justify-end pr-2">
      <div
        className={cn(
          'text-yellow-500 flex items-center space-x-1',
          { 'text-primary': type === 'inprogress' },
          { 'text-green-500': type === 'done' },
          { 'text-orange-500': type === 'wait-approval' },
          { 'text-gray-400': type === 'approved' },
          { 'text-red-500': type === 'overdue' },
        )}
      >
        <Icon className="size-4" />
        <span className="text-sm font-medium">{label}</span>
      </div>
    </div>
  );
};

function getIcon(type: TaskStatusType) {
  switch (type) {
    default:
    case 'inprogress':
      return CircleEllipsis;

    case 'done':
      return CircleCheckBig;

    case 'wait-approval':
      return CircleDotDashed;

    case 'approved':
      return FileCheck;

    case 'overdue':
      return ClockAlert;
  }
}
