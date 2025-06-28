import { IconTagFilled } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

import { PriorityType } from './interface';

const PriorityStatusData: Record<PriorityType, string> = {
  高优先: '高优先',
  中优先: '中优先',
  低优先: '低优先',
};

export const Priority: React.FC<{ type: PriorityType }> = ({ type }) => {
  const label = PriorityStatusData[type];
  return (
    <div
      className={cn(
        'flex items-center space-x-1 w-fit px-3 py-1 absolute top-1.5 left-1.5 rounded-lg',
        { 'bg-red-500': type === '高优先' },
        { 'bg-orange-500': type === '中优先' },
        { 'bg-green-500': type === '低优先' },
      )}
    >
      <span className="text-white">
        <IconTagFilled className="size-3" />
      </span>
      <span className="text-xs text-white font-medium">{label}</span>
    </div>
  );
};
