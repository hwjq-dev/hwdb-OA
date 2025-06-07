import { EmptyState } from '@/components/molecules/empty-state';
import { ScrollArea } from '@/components/ui/scroll-area';

import { ROUTES } from '@/config/route';
import { Card, type Props as CardProps } from './card';

interface Props {
  emptyState: { title: string; subtitle: string };
  items: CardProps[];
}

export const TaskList: React.FC<Props> = ({ items, emptyState }) => {
  return (
    <>
      {items.length ? (
        <ScrollArea className="h-[50dvh] mb-16 scroll-smooth relative !scrollbar-none !scrollbar-thin">
          <div className="flex flex-col space-y-1.5">
            {items.map((t, i) => (
              <Card key={i} {...t} link={ROUTES.$TASK(1)} />
            ))}
          </div>
        </ScrollArea>
      ) : (
        <EmptyState {...emptyState} />
      )}
    </>
  );
};
