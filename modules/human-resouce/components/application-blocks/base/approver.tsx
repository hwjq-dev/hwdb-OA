import { cn } from '@/lib/utils';
import { IconUser } from '@tabler/icons-react';

interface Props {
  position: '主管' | '人事' | '经理' | '总经理';
  className?: string;
}

export const Approver: React.FC<Props> = ({ position = '主管', className }) => {
  return (
    <div
      className={cn(
        'relative bg-yellow-200/40 p-2 flex flex-col items-center justify-center space-y-1 rounded-md last:[&>div]:hidden',
        {
          'bg-green-500/10': position === '人事',
          'bg-orange-500/10': position === '经理',
          'bg-red-500/10': position === '总经理',
        },
      )}
    >
      <IconUser
        className={cn('size-4 text-yellow-500', {
          'text-green-600': position === '人事',
          'text-orange-500': position === '经理',
          'text-red-500': position === '总经理',
        })}
      />
      <p
        className={cn('text-xs text-yellow-500', {
          'text-green-600': position === '人事',
          'text-orange-600': position === '经理',
          'text-red-600': position === '总经理',
        })}
      >
        主管
      </p>
      <div className="w-9 h-3 bg-white z-10 flex items-center justify-center absolute -right-7 top-1/2 -translate-y-1/2 rounded-full">
        <div
          className={cn(
            'relative border border-dashed w-5/6 h-[1px]',
            "before:content-[''] before:absolute before:size-1.5 before:rounded-full before:bg-gray-200 before:-left-0.5 before:-top-[3px]",
            "after:content-[''] after:absolute after:size-1.5 after:rounded-full after:bg-gray-200 after:-right-0.5 after:-top-[3px]",
            className,
          )}
        />
      </div>
    </div>
  );
};
