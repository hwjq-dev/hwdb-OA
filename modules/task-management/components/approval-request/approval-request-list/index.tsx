import { EmptyState } from '@/components/molecules/empty-state';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ApprovalRequestCard } from './card';

const sampleTasks: TaskProps[] = [
  {
    id: 1,
    tgId: '123456789',
    title: '撰写产品需求文档',
    subtitle: '整理初步功能点和用户场景',
    assignedAt: '2025-06-09T09:00:00+07:00',
    tgUsername: 'xiaowang',
    nickName: '小王',
    assigner: '李经理',
    assignee: '丽丽',
    startAt: '2025-06-10T09:00:00+07:00',
    endAt: '2025-06-12T18:00:00+07:00',
    department: '产品部门',
    status: 'wait-approval',
    priority: '高优先',
  },
  {
    id: 2,
    tgId: '987654321',
    title: '准备项目发布材料',
    subtitle: '包括用户指南、FAQ和上线公告',
    assignedAt: '2025-06-08T14:30:00+07:00',
    tgUsername: 'zhangli',
    nickName: '张丽',
    assigner: '产品组长',
    assignee: '明华',
    startAt: '2025-06-09T10:00:00+07:00',
    endAt: '2025-06-11T17:00:00+07:00',
    department: '人事部门',
    status: 'wait-approval',
    priority: '中优先',
  },
  {
    id: 3,
    tgId: '555666777',
    title: '产品使用数据分析',
    subtitle: '分析近期用户使用行为数据并形成报告',
    assignedAt: '2025-06-07T11:00:00+07:00',
    tgUsername: 'lihua',
    nickName: '李华',
    assigner: '李经理',
    assignee: '明师',
    startAt: '2025-06-08T09:00:00+07:00',
    endAt: '2025-06-10T18:00:00+07:00',
    department: '运维部门',
    status: 'wait-approval',
    priority: '低优先',
  },
  {
    id: 4,
    tgId: '222333444',
    title: '竞品调研汇报',
    subtitle: '整理三款同类产品的核心功能与差异化分析',
    assignedAt: '2025-06-05T15:45:00+07:00',
    tgUsername: 'chenhao',
    nickName: '陈浩',
    assigner: '产品总监',
    assignee: '深泽',
    startAt: '2025-06-06T10:00:00+07:00',
    endAt: '2025-06-09T17:30:00+07:00',
    department: '交易员部门',
    status: 'wait-approval',
    priority: '高优先',
  },
];

export const ApprovalRequestList = () => {
  return (
    <>
      {sampleTasks.length ? (
        <ScrollArea className="h-[77dvh] mb-16 scroll-smooth relative !scrollbar-none !scrollbar-thin px-2 mt-4">
          <div className="flex flex-col space-y-1.5">
            {sampleTasks.map((t, i) => (
              <ApprovalRequestCard key={i} {...t} />
            ))}
          </div>
        </ScrollArea>
      ) : (
        <EmptyState title="没有分配任务记录" subtitle="当前未存在记录" />
      )}
    </>
  );
};
