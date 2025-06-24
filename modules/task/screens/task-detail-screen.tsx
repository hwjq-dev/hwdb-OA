'use client';

import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

import { ApproveModal } from '@/components/molecules/modal/approve-modal';
import { useDiscloser } from '@/hooks/use-discloser';

import { IconCircleDashedX } from '@tabler/icons-react';
import { ApproveList } from '../components/high-position/approve-list-section';
import { CreateTaskProgressForm } from '../components/shared';
import { TaskDetailHeader } from '../components/shared/task-detail/task-detail-header';
import { DetailProgressList } from '../components/shared/task-progress/detail-progress-list';

interface Props {
  type: 'approval' | 'normal';
}

export const TaskDetailScreen: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'approval':
      return <ApproveDetailScreen />;

    default:
    case 'normal':
      return <NormalDetailScreen />;
  }
};

const normalDetail = {
  id: 11,
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
  status: 'overdue',
  priority: '中优先',
};

const NormalDetailScreen = () => {
  return (
    <div>
      <TaskDetailHeader
        status={normalDetail.status as never}
        startAt={normalDetail.startAt}
        endAt={normalDetail.endAt}
        assigneeOrassigner={normalDetail.assigner}
      />
      <CreateTaskProgressForm />
      <DetailProgressList />
      <SubmitTaskButton
        label="提交完成任务"
        title="提交任务"
        description="您确定需要提交这个任务"
        toastTitle="提交完成任务已成功"
      />
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
      <TaskDetailHeader
        status={approveDetail.status as never}
        startAt={approveDetail.startAt}
        endAt={approveDetail.endAt}
        assigneeOrassigner={approveDetail.assignee}
      />
      <ApproveList />
      <SubmitTaskButton
        label="立即审核"
        title="审核任务"
        description="您确定需要审核这个任务"
        toastTitle="任务已审核成功"
      />
    </div>
  );
};

interface SubmitProps {
  label: string;
  title: string;
  description: string;
  toastTitle: string;
}

const SubmitTaskButton: React.FC<SubmitProps> = ({ label, title, description, toastTitle }) => {
  const { isOpen, close, toggle } = useDiscloser();
  return (
    <ApproveModal
      btnLabel={label}
      title={title}
      description={description}
      open={isOpen}
      onCancle={close}
      onOpenChange={toggle}
      onDeny={() => {
        close();
        toast('任务已驳回', {
          icon: <IconCircleDashedX className="text-red-500" />,
          position: 'top-right',
        });
      }}
      onApprove={() => {
        close();
        toast(toastTitle, {
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-right',
        });
      }}
    />
  );
};
