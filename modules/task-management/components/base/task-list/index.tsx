import { EmptyState } from '@/components/molecules/empty-state';
import { ROUTES } from '@/config/route';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Card } from './card';

interface Props {
  emptyState: { title: string; subtitle: string };
  items: TaskProps[];
  className?: string;
  type?: 'request-approve' | 'detail';
  showAssignee?: boolean;
}

export const TaskList: React.FC<Props> = ({
  items,
  emptyState,
  className,
  type = 'detail',
  showAssignee,
}) => {
  return (
    <>
      {items.length ? (
        <div
          className={cn(
            'h-[50dvh] overflow-y-auto mb-16 scroll-smooth relative !scrollbar-none !scrollbar-thin',
            className,
          )}
        >
          <div className="flex flex-col space-y-1.5">
            {items.map((t, i) => (
              <Link key={i} href={type === 'detail' ? ROUTES.$TASK(1) : ROUTES.$REQUEST_APPROVE(1)}>
                <Card {...t} showAssignee={showAssignee} />
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
