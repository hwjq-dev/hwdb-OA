'use client';

import { CircleCheck, Plus } from 'lucide-react';
import { toast } from 'sonner';

import { BaseModal } from '@/components/molecules/modal/base-modal';
import { TextInput } from '@/components/molecules/text-input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useDiscloser } from '@/hooks/use-discloser';

export const CreateTaskProgressForm = () => {
  return (
    <div className="px-2">
      <div
        className="bg-white flex items-center justify-between border border-gray-1200 px-3 w-full h-12 rounded-md shadow-[0px_0px_32px_0px_#dae7f5]
"
      >
        <span className="text-sm text-dark font-medium">创建任务进度</span>
        <FormModal />
      </div>
    </div>
  );
};

export const FormModal = () => {
  const { isOpen, close, toggle } = useDiscloser();
  return (
    <BaseModal
      icon={<Plus className="text-primary size-4" />}
      open={isOpen}
      title="创建任务进度"
      description="请输入以下申请表单"
      onClose={close}
      onOpenChange={toggle}
    >
      <form
        className="flex flex-col space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          close();
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
