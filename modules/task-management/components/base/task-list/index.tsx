import { ScrollArea } from '@/components/ui/scroll-area';

import { Card, type Props as CardProps } from './card';

const data: CardProps[] = [
  {
    variant: '下级',
    taskId: '#2025010605',
    title: '跟进公群频道',
    priority: 'medium',
    status: 'inprogress',
    subtitle: '今天三点之前把这个任务完成',
    assignPeriod: '2小时前',
    assignerOrAssignee: '由主管分配',
    startDate: '2025年 01月 01日 8:01:10',
    endDate: '2025年 01月 01日 5:00:10 ',
  },
  {
    variant: '下级',
    taskId: '#2025010605',
    title: '跟进公群频道',
    priority: 'low',
    status: 'done',
    subtitle: '今天三点之前把这个任务完成',
    assignPeriod: '2小时前',
    assignerOrAssignee: '由主管分配',
    startDate: '2025年 01月 01日 8:01:10',
    endDate: '2025年 01月 01日 5:00:10 ',
  },
  {
    variant: '下级',
    taskId: '#2025010605',
    title: '跟进公群频道',
    priority: 'high',
    status: 'approved',
    subtitle: '今天三点之前把这个任务完成',
    assignPeriod: '2小时前',
    assignerOrAssignee: '由主管分配',
    startDate: '2025年 01月 01日 8:01:10',
    endDate: '2025年 01月 01日 5:00:10 ',
  },
  {
    variant: '下级',
    taskId: '#2025010605',
    title: '跟进公群频道',
    priority: 'high',
    status: 'approved',
    subtitle: '今天三点之前把这个任务完成',
    assignPeriod: '2小时前',
    assignerOrAssignee: '由主管分配',
    startDate: '2025年 01月 01日 8:01:10',
    endDate: '2025年 01月 01日 5:00:10 ',
  },
  {
    variant: '下级',
    taskId: '#2025010605',
    title: '跟进公群频道',
    priority: 'high',
    status: 'approved',
    subtitle: '今天三点之前把这个任务完成',
    assignPeriod: '2小时前',
    assignerOrAssignee: '由主管分配',
    startDate: '2025年 01月 01日 8:01:10',
    endDate: '2025年 01月 01日 5:00:10 ',
  },
  {
    variant: '下级',
    taskId: '#2025010605',
    title: '跟进公群频道',
    priority: 'high',
    status: 'approved',
    subtitle: '今天三点之前把这个任务完成',
    assignPeriod: '2小时前',
    assignerOrAssignee: '由主管分配',
    startDate: '2025年 01月 01日 8:01:10',
    endDate: '2025年 01月 01日 5:00:10 ',
  },
];

export const TaskList = () => {
  return (
    <ScrollArea className="h-[48dvh] pb-10 scroll-smooth relative !scrollbar-none !scrollbar-thin">
      <div className="space-y-2">
        {data.map((t, i) => (
          <Card key={i} {...t} />
        ))}
      </div>
    </ScrollArea>
  );
};
