'use client';

import { CircleCheck, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import DateTimeCustomPicker from '@/components/molecules/day-picker';
import { SearchSelect } from '@/components/molecules/search-select';
import { CustomSelect } from '@/components/molecules/select';
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
            label="自助申请任务"
            description="请输入以下申请表单"
            onClick={() => setOpen(false)}
          />
        </DialogHeader>

        {/*--- Indicator ---*/}
        <div className="bg-gradient-to-r my-2 from-gray-400/10 via-60% via-primary to-gray-400/10 w-full h-[1px] rounded-full" />

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

          <div className="grid grid-cols-2 gap-2">
            {/*--- Select department ---*/}
            {/* <CustomSelect
              placeholder="选择部门"
              items={[
                { lable: '运维部门', value: '运维部门' },
                { lable: '产品部门', value: '产品部门' },
                { lable: '技术部门', value: '技术部门' },
                { lable: '人事部门', value: '人事部门' },
                { lable: '交易员部门', value: '交易员部门' },
              ]}
              onChange={(value) => null}
            /> */}

            <SearchSelect
              placeholder="选择部门"
              items={[
                { label: '运维部门', value: '运维部门' },
                { label: '产品部门', value: '产品部门' },
                { label: '技术部门', value: '技术部门' },
                { label: '人事部门', value: '人事部门' },
                { label: '交易员部门', value: '交易员部门' },
              ]}
              onChange={(value) => null}
            />

            {/*--- Select approver ---*/}
            <CustomSelect
              placeholder="选择审批者"
              items={[
                { lable: '总经理', value: '总经理' },
                { lable: '经理', value: '经理' },
                { lable: '主管', value: '主管' },
                { lable: '组长', value: '组长' },
              ]}
              onChange={(value) => null}
            />
          </div>

          {/*--- Start date ---*/}
          <DateTimeCustomPicker placeholder="开始时间" onSelected={(date) => null} />

          {/*--- Complete date ---*/}
          <DateTimeCustomPicker placeholder="截止时间" onSelected={(date) => null} />

          {/*--- Priority ---*/}
          <CustomSelect
            placeholder="选择优先"
            items={[
              { lable: '高优先', value: '高优先' },
              { lable: '中优先', value: '中优先' },
              { lable: '低优先', value: '低优先' },
            ]}
            onChange={(value) => null}
          />

          {/*--- Description ---*/}
          <Textarea placeholder="请输入任务描述 ..." onChange={(e) => null} />

          <Button type="submit" className="hover:!bg-primary/50">
            提交申请
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
