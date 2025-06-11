import {
  CircleCheckBig,
  CircleDotDashed,
  CircleEllipsis,
  ClockAlert,
  FileCheck,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import { TaskStatusType } from './interface';

export const TaskStatusData: Record<TaskStatusType, string> = {
  'in-progress': '执行中',
  done: '已完成',
  'wait-approval': '审批中',
  approved: '已审批',
  overdue: '已超时',
};

export const TaskStatus: React.FC<{ type: TaskStatusType }> = ({ type }) => {
  const Icon = getIcon(type);
  const label = TaskStatusData[type];
  return (
    <div className="flex justify-end pr-2">
      <div
        className={cn(
          'text-yellow-500 flex items-center space-x-1',
          { 'text-primary': type === 'in-progress' },
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

export function getIcon(type: TaskStatusType) {
  switch (type) {
    default:
    case 'in-progress':
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
