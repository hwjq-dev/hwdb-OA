'use client';

import { CircleCheckBig } from 'lucide-react';
import { toast } from 'sonner';

import { DatePicker } from '@/components/molecules/date';
import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { FormFieldWrapper } from './base/form-field-wrapper';

export const ChangePositionRequestForm = () => {
  return (
    <div className="space-y-4">
      <Form />
    </div>
  );
};

const Form = () => {
  return (
    <div className="relative mt-4 p-4 bg-radial from-primary-200 to-primary-200/30 rounded-3xl">
      <p className="text-lg text-center py-1 text-white mb-7 w-fit px-8 rounded-tl-xl rounded-br-xl font-bold bg-gradient-to-r from-primary to-primary-500/90">
        转岗表
      </p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast('您的转岗申请已提交成功.', {
            className: '!w-3/4 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        {/*--- 调岗时间 ---*/}
        <FormFieldWrapper label="调岗时间">
          <DatePicker
            id="选择调岗时间"
            placeholder="选择调岗时间"
            className="rounded-lg h-10 bg-white border-none"
            onSelected={(date) => null}
          />
        </FormFieldWrapper>

        {/*--- 调转部门 ---*/}
        <FormFieldWrapper label="调转部门">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="选择调转部门"
            items={[
              { lable: '产品部门', value: '产品部门' },
              { lable: '运维部门', value: '运维部门' },
              { lable: '人事部门', value: '人事部门' },
              { lable: '技术部门', value: '技术部门' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 调转岗位 ---*/}
        <FormFieldWrapper label="调转岗位">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="选择调转岗位"
            items={[
              { lable: '测试', value: '测试' },
              { lable: '交易员', value: '交易员' },
              { lable: '统计', value: '统计' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 调整前工资 ---*/}
        <FormFieldWrapper label="调整前工资">
          <Input
            placeholder="输入调整前工资"
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
          />
        </FormFieldWrapper>

        {/*--- 调整后工资 ---*/}
        <FormFieldWrapper label="调整后工资">
          <Input
            placeholder="输入调整后工资"
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
          />
        </FormFieldWrapper>

        {/*--- 个人工作总结 ---*/}
        <FormFieldWrapper label="个人工作总结">
          <Textarea
            placeholder="填写您工作总结 ..."
            className="h-42 rounded-lg bg-white border-none"
          />
          <small className="text-[11px]">
            (对原部门工作情况总结及调入部门的工作规划，此页不够可附页)
          </small>
        </FormFieldWrapper>

        {/*--- 调薪 ---*/}
        <FormFieldWrapper label="调薪原因">
          <Textarea
            placeholder="填写调薪原因 ..."
            className="h-42 rounded-lg bg-white border-none"
          />
        </FormFieldWrapper>

        <div>
          <Button type="submit" className="w-full cursor-pointer font-bold h-11 rounded-xl">
            提交转岗申请
          </Button>
        </div>
      </form>
    </div>
  );
};
