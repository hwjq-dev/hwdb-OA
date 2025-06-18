import { cn } from '@/lib/utils';

interface Props {
  label?: string;
  color?: 'red' | 'green';
}

export const OfficialBadge: React.FC<Props> = ({ label = '好旺通告', color = 'green' }) => (
  <div
    className={cn(
      'size-16 rounded-full border-green-600 border-2 absolute -top-3 bg-white right-0',
      { 'border-red-500': color === 'red' },
    )}
  >
    <div
      className={cn(
        'absolute overflow-hidden w-20 top-1 -translate-x-2.5 translate-y-2 bg-white text-center border-4 rounded-sm -rotate-25 border-green-600',
        { 'border-red-500': color === 'red' },
      )}
    >
      <p
        className={cn('size-full py-1 text-sm bg-green-500/10 text-green-600 font-semibold', {
          'text-red-500 bg-red-500/5': color === 'red',
        })}
      >
        {label}
      </p>
    </div>
  </div>
);
