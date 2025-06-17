'use client';

import { CircleCheck, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

import { DeleteModal } from '@/components/molecules/modal/delete-modal';
import { useDiscloser } from '@/hooks/use-discloser';

export const AnnoucementDeleteForm = () => {
  const { isOpen, toggle, close } = useDiscloser();

  return (
    <DeleteModal
      icon={<Trash2 className="size-4 text-red-600" />}
      open={isOpen}
      onDelete={() => {
        close();
        toast('记录已删除成功.', {
          className: '!w-1/2 !ml-auto !mr-6',
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-center',
        });
      }}
      onCancle={() => close()}
      onOpenChange={() => toggle()}
    />
  );
};
