'use client';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useDiscloser } from '@/hooks/use-discloser';
import { cn } from '@/lib/utils';

export const CollapseWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen, toggle } = useDiscloser();
  return (
    <Collapsible open={isOpen} onOpenChange={toggle} className="!contents">
      <CollapsibleTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className={cn(
            'absolute bottom-0 hover:bg-transparent right-0 left-0 w-full h-20 bg-gradient-to-t from-gray-100 via-70% via-gray-50/90 to-transparent',
            { 'bg-transparent': isOpen },
          )}
        >
          {/* <ChevronsUpDown /> */}
          <div
            className={cn(' mt-7 flex items-center space-x-1', {
              'mt-12': isOpen,
            })}
          >
            <span className="text-[11px] text-dark">{isOpen ? '点击折叠' : '点击展开'}</span>
            <span>
              {isOpen ? (
                <IconChevronUp className="size-4 text-primary" />
              ) : (
                <IconChevronDown className="size-4 text-primary" />
              )}
            </span>
          </div>
          <span className="sr-only">点击展开</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="!contents">{children}</CollapsibleContent>
    </Collapsible>
  );
};
