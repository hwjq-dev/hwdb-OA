'use client';

import { CircleCheck } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { ApproveModal } from '@/components/molecules/modal/approve-modal';

import { ApproveHeaderSection } from '../components/home-head/approve-list-section/approve-header-section';
import { ApproveList } from '../components/home-head/approve-list-section/approve-list';

export const HeadTaskHomeDetailScreen: React.FC = () => {
  return (
    <div>
      <ApproveHeaderSection />
      <ApproveList />
      <ApproveButton />
    </div>
  );
};

const ApproveButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <ApproveModal
      btnLabel="立即审批"
      title="审批任务"
      description="您确定需要审批这个任务"
      open={open}
      onCancle={() => setOpen(false)}
      onOpenChange={(open) => setOpen(open)}
      onApprove={() => {
        setOpen(false);
        toast('任务已审批成功', {
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-right',
        });
      }}
    />
  );
};
