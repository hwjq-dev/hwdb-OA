import { IconProgressCheck } from '@tabler/icons-react';
import { CircleDotDashed, CircleEllipsis, ClockAlert, FileCheck } from 'lucide-react';

import { cn } from '@/lib/utils';

export const TaskStatusData: Record<StatusType, string> = {
  审核中: '审核中',
  执行中: '执行中',
  '已完成,待审核': '待审核',
  审核完成: '已完成',
  超时: '已超时',
  已关闭: '已关闭',
};

export const TaskStatus: React.FC<{ type: StatusType; className?: string }> = ({
  type,
  className,
}) => {
  const Icon = getIcon(type);
  const label = TaskStatusData[type];

  return (
    <div
      className={cn(
        'flex py-1 px-3 border-dashed',
        {
          'bg-yellow-500/5 border-t border-b border-r border-yellow-400': type === '审核中',
          'bg-primary/5 border-t border-b border-r border-primary': type === '执行中',
          'bg-orange-500/5 border-t border-b border-r border-orange-400': type === '已完成,待审核',
          'bg-green-500/5 border-t border-b border-r border-green-500': type === '审核完成',
          'bg-red-500/5 border-t border-b border-r border-red-500': type === '超时',
        },
        className,
      )}
    >
      <div
        className={cn(
          'text-yellow-500 flex items-center space-x-1',
          { 'text-primary': type === '执行中' },
          { 'text-orange-500': type === '已完成,待审核' },
          { 'text-yellow-500': type === '审核中' },
          { 'text-green-500': type === '审核完成' },
          { 'text-red-500': type === '超时' },
        )}
      >
        <Icon className="size-4" />
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  );
};

export function getIcon(type: StatusType) {
  switch (type) {
    default:
    case '执行中':
      return CircleEllipsis;

    case '已完成,待审核':
      return IconProgressCheck;

    case '审核中':
      return CircleDotDashed;

    case '审核完成':
      return FileCheck;

    case '超时':
      return ClockAlert;
  }
}
