'use client';

import { ITaskDetail } from '@/api';

import { ApproveList } from '../components/high-position/approve-list-section';
// import { CreateTaskProgressForm } from '../components/shared';

export const TaskDetailScreen: React.FC<ITaskDetail> = ({ type }) => {
  return (
    <div>
      {/* <CreateTaskProgressForm /> */}
      {/* <DetailProgressList /> */}
    </div>
  );
};

const approveDetail = {
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
};

const ApproveDetailScreen = () => {
  return (
    <div>
      {/* <TaskDetailHeader
        status={approveDetail.status as never}
        startAt={approveDetail.startAt}
        endAt={approveDetail.endAt}
        assigneeOrassigner={approveDetail.assignee}
      /> */}
      <ApproveList />
      {/* <SubmitTaskButton
        label="立即审核"
        title="审核任务"
        description="您确定需要审核这个任务"
        toastTitle="任务已审核成功"
      /> */}
    </div>
  );
};
