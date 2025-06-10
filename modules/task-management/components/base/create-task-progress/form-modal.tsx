'use client';

import { CircleCheck, Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { BaseModal } from '@/components/molecules/modal/base-modal';
import { TextInput } from '@/components/molecules/text-input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export const FormModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <BaseModal
      icon={<Plus className="text-primary size-4" />}
      open={open}
      title="创建任务进度"
      description="请输入以下申请表单"
      onClose={() => setOpen(false)}
      onOpenChange={(open) => setOpen(open)}
    >
      <form
        className="flex flex-col space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(false);
          toast('记录已创建成功.', {
            icon: <CircleCheck className="text-green-500" />,
            position: 'top-right',
          });
        }}
      >
        {/*--- Title ---*/}
        <TextInput label="请输入任务标题" onChange={(v) => null} />

        {/*--- Description ---*/}
        <Textarea placeholder="请输入任务描述 ..." onChange={(e) => null} />

        <Button type="submit" className="hover:!bg-primary/50">
          保存
        </Button>
      </form>
    </BaseModal>
  );
};
