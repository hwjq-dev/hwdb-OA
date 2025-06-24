'use client';

import { FilterListWrapper } from '../filter-list-wrapper';
import { TaskList } from '../task';

const sampleTasks: TaskProps[] = [
  {
    tgId: '100011',
    title: '搭建测试环境',
    subtitle: '为新项目部署临时服务器和数据库',
    assignedAt: '2025-06-09T10:30:00+07:00',
    tgUsername: 'zhangmin',
    nickName: '小张',
    assigner: '技术主管',
    assignee: '明华',
    startAt: '2025-06-09T14:00:00+07:00',
    endAt: '2025-06-11T18:00:00+07:00',
    department: '技术部门',
    status: 'wait-approval',
    priority: '中优先',
  },
  {
    id: 12,
    tgId: '100012',
    title: '修复系统异常Bug',
    subtitle: '定位用户反馈的崩溃问题',
    assignedAt: '2025-06-08T09:00:00+07:00',
    tgUsername: 'lili_dev',
    nickName: '丽姐',
    assigner: '开发组长',
    assignee: '丽丽',
    startAt: '2025-06-08T10:00:00+07:00',
    endAt: '2025-06-10T18:30:00+07:00',
    department: '技术部门',
    status: 'wait-approval',
    priority: '高优先',
  },
  {
    id: 13,
    tgId: '100013',
    title: '编写员工手册',
    subtitle: '更新2025年公司规章制度',
    assignedAt: '2025-06-07T15:00:00+07:00',
    tgUsername: 'yuanyuan_hr',
    nickName: '圆圆',
    assigner: '行政部',
    assignee: '月圆',
    startAt: '2025-06-08T09:00:00+07:00',
    endAt: '2025-06-11T17:00:00+07:00',
    department: '人事部门',
    status: 'wait-approval',
    priority: '低优先',
  },
];

export const TabWaitApproveTaskListSection = () => {
  return (
    <FilterListWrapper>
      <TaskList
        items={sampleTasks}
        className="h-[calc(100dvh-338px)]"
        emptyState={{
          title: '未审批中记录',
          subtitle: '尝试查看其他类型',
        }}
      />
    </FilterListWrapper>
  );
};
