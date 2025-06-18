'use client';

import { CircleCheckBig } from 'lucide-react';
import { toast } from 'sonner';

import { OfficialBadge } from '@/components/molecules/official-badge';
import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ApprovalProcessWrapper } from './base/approval-process-wrapper';
import { Approver } from './base/approver';
import { FormFieldWrapper } from './base/form-field-wrapper';

export const ChangeDayoffRequestForm = () => {
  return (
    <div className="space-y-4">
      <ApprovalProcess />
      <Form />
    </div>
  );
};

const ApprovalProcess = () => {
  return (
    <ApprovalProcessWrapper label="排班审批流程" legend="有效排班申请需要通过三位审批者过程中">
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Approver position="主管" />
        <Approver position="人事" />
        <Approver position="经理" />
      </div>
    </ApprovalProcessWrapper>
  );
};

const Form = () => {
  return (
    <div className="relative mt-4 p-4 bg-radial from-primary-200 to-primary-200/30 rounded-3xl">
      <OfficialBadge label="好旺担保" color="green" />
      <p className="text-lg text-center py-1 text-white mb-7 w-fit px-8 rounded-tl-xl rounded-br-xl font-bold bg-gradient-to-r from-primary to-primary-500/90">
        排班条
      </p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast('您的排班申请已提交成功.', {
            className: '!w-1/2 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        {/*--- 班次类型 ---*/}
        <FormFieldWrapper label="班次类型">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="班次类型"
            items={[
              { lable: '白班', value: '白班' },
              { lable: '中班', value: '中班' },
              { lable: '晚班', value: '晚班' },
              { lable: '大晚班', value: '大晚班' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 工作时间 ---*/}
        <FormFieldWrapper label="工作时间">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="工作时间"
            items={[
              { lable: '8:00 AM - 4:00 PM', value: '8:00 AM - 4:00 PM' },
              { lable: '8:00 AM - 5:00 PM', value: '8:00 AM - 5:00 PM' },
              { lable: '12:00 PM - 8:00 PM', value: '12:00 PM - 8:00 PM' },
              { lable: '4:00 PM - 12:00 PM', value: '4:00 PM - 12:00 PM' },
              { lable: '12:00 PM - 8:00 AM', value: '12:00 PM - 8:00 AM' },
              { lable: '5:00 PM - 2:00 AM', value: '5:00 PM - 2:00 AM' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 休日 ---*/}
        <FormFieldWrapper label="休日">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="选择休日"
            items={[
              { lable: '周一', value: '周一' },
              { lable: '周二', value: '周二' },
              { lable: '周三', value: '周三' },
              { lable: '周四', value: '周四' },
              { lable: '周五', value: '周五' },
              { lable: '周六', value: '周六' },
              { lable: '周日', value: '周日' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 请假事由 ---*/}
        <FormFieldWrapper label="替班">
          <Input placeholder="请输入替班人" className="h-10 bg-white border-none text-sm" />
        </FormFieldWrapper>

        <div>
          <Button type="submit" className="w-full cursor-pointer font-bold h-11 rounded-xl">
            提交排班申请
          </Button>
        </div>
      </form>
    </div>
  );
};
