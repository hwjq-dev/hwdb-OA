import { EmptyState } from '@/components/molecules/empty-state';
import { ScrollArea } from '@/components/ui/scroll-area';

import { Card, type Props as CardProps } from './card';

interface Props {
  items: CardProps[];
}

export const TaskList: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.length ? (
        <ScrollArea className="h-[50dvh] mb-16 scroll-smooth relative !scrollbar-none !scrollbar-thin">
          <div className="space-y-2">
            {items.map((t, i) => (
              <Card key={i} {...t} />
            ))}
          </div>
        </ScrollArea>
      ) : (
        <EmptyState />
      )}
    </>
  );
};
