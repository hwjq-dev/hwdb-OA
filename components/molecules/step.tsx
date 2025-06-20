import { IconUser } from '@tabler/icons-react';
import { CircleCheckBig, Loader } from 'lucide-react';

import { getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';

interface StepProps {
  type: 'default' | '主管' | '人事' | '经理' | '总经理';
  label?: string;
  date?: string;
  title: string;
  subtitle?: string;
  isApproved: boolean;
}

export const Step: React.FC<StepProps> = ({
  type = 'default',
  label,
  title,
  subtitle,
  isApproved,
  date,
}) => {
  return (
    <div className="relative flex justify-between items-center last:[&>div:last-child]:hidden">
      <div className="flex items-start space-x-3 ">
        {/*-- Profile Badge --*/}
        <div
          className={cn(
            'bg-radial from-orange-100 to-orange-300 outline outline-offset-2 outline-orange-300 rounded-full p-3 w-fit z-10',
            {
              'bg-radial from-yellow-100 to-yellow-300 outline outline-offset-2 outline-yellow-300':
                type === '主管',
              'bg-radial from-green-100 to-green-300 outline outline-offset-2 outline-green-300':
                type === '人事',
              'bg-radial from-red-100 to-red-300 outline outline-offset-2 outline-red-300':
                type === '经理',
              'bg-radial from-purple-100 to-purple-300 outline outline-offset-2 outline-purple-300':
                type === '总经理',
            },
          )}
        >
          <IconUser
            className={cn('size-6 text-orange-500', {
              'text-yellow-500': type === '主管',
              'text-green-500': type === '人事',
              'text-red-500': type === '经理',
              'text-purple-500': type === '总经理',
            })}
          />
        </div>

        <div className="flex flex-col justify-center h-12">
          <p className="text-sm font-bold">{title}</p>
          {date && <p className="text-[10px]">{getFormatDatetime(new Date(date))}</p>}
          {subtitle && <p className="text-xs font-medium">{subtitle}</p>}
        </div>
      </div>

      <div
        className={cn('flex space-x-2 items-center px-2 py-1 rounded-md', {
          'bg-green-100': isApproved,
          'border border-dashed': !isApproved,
        })}
      >
        <span>
          {isApproved ? (
            <CircleCheckBig className="size-5 text-green-500" />
          ) : (
            <Loader className="size-5 text-yellow-400" />
          )}
        </span>
        <span
          className={cn('text-sm text-yellow-400', {
            'text-green-500': isApproved,
          })}
        >
          {label ? label : isApproved ? '通过' : '待定'}
        </span>
      </div>

      <div className="h-12 w-0.5 border-l border-dashed border-primary-200 absolute -bottom-10 left-6 z-0" />
    </div>
  );
};
