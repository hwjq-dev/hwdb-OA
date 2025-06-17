import { Tag } from 'lucide-react';

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
        'flex items-center space-x-1 w-fit py-0.5 px-3 absolute top-0 left-0 rounded-tl-md rounded-br-md',
        { 'bg-red-500': type === '高优先' },
        { 'bg-orange-500': type === '中优先' },
        { 'bg-green-500': type === '低优先' },
      )}
    >
      <span className="text-white">
        <Tag className="size-4" />
      </span>
      <span className="text-sm text-white font-medium">{label}</span>
    </div>
  );
};
