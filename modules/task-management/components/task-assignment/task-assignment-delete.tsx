'use client';

import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

import { DeleteModal } from '@/components/molecules/modal/delete-modal';
import { Button } from '@/components/ui/button';
import { useDiscloser } from '@/hooks/use-discloser';

export const TaskAssignmentDelete = () => {
  const { isOpen, toggle, close } = useDiscloser();

  return (
    <DeleteModal
      icon={
        <Button
          size="sm"
          className="!text-[12px] rounded-full !h-7 bg-gray-200 text-black ml-1 px-3.5"
        >
          删除
        </Button>
      }
      open={isOpen}
      onDelete={() => {
        close();
        toast('记录已删除成功.', {
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-right',
        });
      }}
      onCancle={() => close()}
      onOpenChange={() => toggle()}
    />
  );
};
