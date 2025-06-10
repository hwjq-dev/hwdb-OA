'use client';

import { CircleCheck } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { ApproveModal } from '@/components/molecules/modal/approve-modal';

import { CreateProgress } from '../components/base/create-task-progress';
import { DetailProgressList } from '../components/home/detail/detail-progress-list';
import { HeaderSection } from '../components/home/detail/header-section';

export const TaskHomeDetailScreen = () => {
  return (
    <div>
      <HeaderSection />
      <CreateProgress />
      <DetailProgressList />
      <SubmitTaskButton />
    </div>
  );
};

const SubmitTaskButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <ApproveModal
      btnLabel="提交完成任务"
      title="提交任务"
      description="您确定需要提交这个任务"
      open={open}
      onCancle={() => setOpen(false)}
      onOpenChange={(open) => setOpen(open)}
      onApprove={() => {
        setOpen(false);
        toast('提交完成任务已成功', {
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-right',
        });
      }}
    />
  );
};
