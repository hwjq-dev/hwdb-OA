'use client';

import { useState } from 'react';

import { EmptyState } from '@/components/molecules/empty-state';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { NotificationList } from './notification-list/notification-list';

export const NotificationTab = () => {
  const [value, setValue] = useState('tab-1');

  return (
    <Tabs value={value} onValueChange={(value) => setValue(value)}>
      <div className="w-full flex justify-center">
        <TabsList className="w-fit">
          <TabsTrigger
            value="tab-1"
            className="relative px-7 py-1.5 text-base font-medium data-[state=inactive]:text-primary"
          >
            公告通知
            <Badge
              className="absolute right-1 top-1 h-4 min-w-4 rounded-full px-0.5 font-mono !text-[9px] tabular-nums"
              variant="destructive"
            >
              9
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="px-5 py-1.5 text-base font-medium data-[state=inactive]:text-primary"
          >
            审批通知
          </TabsTrigger>
          {/* <TabsTrigger
            value="tab-3"
            className="px-5 py-1.5 text-base font-medium data-[state=inactive]:text-primary"
          >
            任务通知
          </TabsTrigger> */}
        </TabsList>
      </div>

      <TabsContent
        value="tab-1"
        className="h-[75dvh] overflow-y-auto pb-2 scrollbar scrollbar-none"
      >
        <div className="text-muted-foreground p-4 text-center text-sm">
          <NotificationList />
        </div>
      </TabsContent>
      <TabsContent value="tab-2" className="h-[75dvh] flex flex-col justify-center">
        <div className="text-muted-foreground p-4 text-center text-sm">
          <EmptyState title="未审批通知" subtitle="当前没有通知推送" type="notification" />
        </div>
      </TabsContent>
      {/* <TabsContent value="tab-3" className="h-[75dvh] flex flex-col justify-center">
        <div className="text-muted-foreground p-4 text-center text-sm">
          <EmptyState title="未任务通知" subtitle="当前没有通知推送" type="notification" />
        </div>
      </TabsContent> */}
    </Tabs>
  );
};
