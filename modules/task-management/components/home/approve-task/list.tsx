import { TaskList } from '../../base/task-list';

const data = [
  {
    variant: '下级',
    taskId: '#2025010605',
    title: '跟进公群频道',
    priority: 'medium',
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
    priority: 'low',
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

export const List = () => {
  return (
    <div className="mt-3">
      <TaskList
        items={data as never}
        emptyState={{
          title: '未审批记录',
          subtitle: '尝试查看其他类型',
        }}
      />
    </div>
  );
};
