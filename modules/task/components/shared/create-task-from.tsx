'use client';

import { CircleCheck, Plus } from 'lucide-react';
import React, { ReactNode } from 'react';
import { toast } from 'sonner';

import DateTimeCustomPicker from '@/components/molecules/day-picker';
import { BaseModal } from '@/components/molecules/modal/base-modal';
import { CustomSelect } from '@/components/molecules/select';
import { TextInput } from '@/components/molecules/text-input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useDiscloser } from '@/hooks/use-discloser';

export const CreateTaskForm = () => {
  return (
    <div className="space-y-1 flex items-center justify-between">
      <p className="font-bold text-xl text-gray-800">任务例表</p>
      <div
        className="bg-white flex items-center space-x-2 border border-gray-1200 px-3 h-10 rounded-lg shadow-[0px_2px_56px_-13px_#a3b0b8]
"
      >
        <span className="text-sm text-dark font-medium">发布任务</span>
        <CreateFormModal />
      </div>
    </div>
  );
};

export const CreateFormModal: React.FC<{ icon?: ReactNode; title?: string }> = ({
  icon,
  title = '个人发布任务',
}) => {
  const { isOpen, toggle, close } = useDiscloser();

  return (
    <BaseModal
      open={isOpen}
      title={title}
      description="请输入以下申请表单"
      icon={
        icon ? (
          icon
        ) : (
          <div className="bg-primary-200/60 p-1.5 rounded-full">
            <Plus className="size-4 text-primary" />
          </div>
        )
      }
      onClose={close}
      onOpenChange={toggle}
    >
      <form
        className="flex flex-col space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          close();
          toast('任务已发布成功.', {
            icon: <CircleCheck className="text-green-500" />,
            position: 'top-right',
          });
        }}
      >
        {/*--- Title ---*/}
        <TextInput label="请输入任务标题" onChange={(v) => null} />

        {/* <div className="grid grid-cols-1">
           <CustomSelect
            placeholder="选择部门"
            items={[
              { lable: '运维部门', value: '运维部门' },
              { lable: '产品部门', value: '产品部门' },
              { lable: '技术部门', value: '技术部门' },
              { lable: '人事部门', value: '人事部门' },
              { lable: '交易员部门', value: '交易员部门' },
            ]}
            onChange={(value) => null}
          /> 


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
        </div> */}

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
        <Textarea placeholder="请输入任务内容 ..." className="h-28" onChange={(e) => null} />

        <Button type="submit" className="hover:!bg-primary/50">
          发布任务
        </Button>
      </form>
    </BaseModal>
  );
};
