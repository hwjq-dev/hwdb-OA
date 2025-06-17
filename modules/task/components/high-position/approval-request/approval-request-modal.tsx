'use client';

import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

import { ApproveModal } from '@/components/molecules/modal/approve-modal';
import { Button } from '@/components/ui/button';
import { useDiscloser } from '@/hooks/use-discloser';

export const ApproveRequestModal = () => {
  const { isOpen, toggle, close } = useDiscloser();

  return (
    <ApproveModal
      icon={
        <Button
          size="sm"
          className="!text-[12px] mt-2 rounded-full !h-7 bg-gray-200 text-black ml-1 px-4"
        >
          立即审批
        </Button>
      }
      btnLabel="立即审批"
      title="审批任务"
      description="您确定需要审批这个任务"
      open={isOpen}
      onCancle={close}
      onOpenChange={() => toggle()}
      onApprove={() => {
        close();
        toast('任务已审批成功', {
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-right',
        });
      }}
    />
  );
};
