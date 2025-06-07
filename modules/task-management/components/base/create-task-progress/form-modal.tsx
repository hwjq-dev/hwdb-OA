'use client';

import { Plus, X } from 'lucide-react';
import { useState } from 'react';

import { TextInput } from '@/components/molecules/text-input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

export const FormModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger>
        <Plus className="size-4 text-primary" />
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <FormHeader
            label="创建任务进度"
            description="请输入以下申请表单"
            onClick={() => setOpen(false)}
          />
        </DialogHeader>

        {/*--- Indicator ---*/}
        <div className="bg-gradient-to-r my-2 from-gray-400/10 via-60% via-primary to-gray-400/10 w-full h-[1px] rounded-full" />

        <form className="flex flex-col space-y-3">
          {/*--- Title ---*/}
          <TextInput label="请输入任务标题" onChange={(v) => null} />

          {/*--- Description ---*/}
          <Textarea placeholder="请输入任务描述 ..." onChange={(e) => null} />

          <Button type="submit" className="hover:!bg-primary/50" onClick={() => alert('提交成功')}>
            保存
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

interface FormHeaderProps {
  label: string;
  description: string;
  onClick: () => void;
}
const FormHeader: React.FC<FormHeaderProps> = (props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <DialogTitle className="text-start font-bold">{props.label}</DialogTitle>
        <span className="p-1.5 bg-primary/10 rounded-full" role="button" onClick={props.onClick}>
          <X className="text-primary size-5" />
        </span>
      </div>
      <DialogDescription className="text-start">{props.description}</DialogDescription>
    </>
  );
};
