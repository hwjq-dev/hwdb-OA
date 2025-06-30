import Link from 'next/link';

import { EmptyState } from '@/components/molecules/empty-state';
import { ROUTES } from '@/config/route';
import { cn } from '@/lib/utils';

import { Card } from './card';

interface Props {
  loading?: boolean;
  isApproval?: boolean;
  variant?: '上级' | '下级';
  emptyState: { title: string; subtitle: string };
  items: TaskCardProps[];
  className?: string;
}

export const TaskList: React.FC<Props> = (props) => {
  const { variant = '下级', isApproval = false, emptyState, items, className } = props;
  return (
    <>
      {(items || [])?.length ? (
        <div className={cn('relative', className)}>
          <div className="flex flex-col space-y-1.5">
            {items.map((t, i) => (
              <Link
                key={i}
                href={!isApproval ? ROUTES.$TASK(t.id) : ROUTES.$TASK_REQUEST_APPROVE(t.id)}
              >
                <Card variant={variant} {...t} />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <EmptyState {...emptyState} />
      )}
    </>
  );
};
