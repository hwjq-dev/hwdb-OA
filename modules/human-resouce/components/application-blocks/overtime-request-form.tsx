'use client';

import { IconStopwatch } from '@tabler/icons-react';
import { CircleCheckBig } from 'lucide-react';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

import DateTimeCustomPicker from '@/components/molecules/day-picker';
import { OfficialBadge } from '@/components/molecules/official-badge';
import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { getDiff } from '@/lib/dayjs';

import { ApprovalProcessWrapper } from './base/approval-process-wrapper';
import { Approver } from './base/approver';
import { FormFieldWrapper } from './base/form-field-wrapper';

export const OvertimeRequestForm = () => {
  return (
    <div className="space-y-4">
      <ApprovalProcess />
      <Form />
    </div>
  );
};

const ApprovalProcess = () => {
  return (
    <ApprovalProcessWrapper label="加班审批流程" legend="有效加班申请需要通过三位审批者过程中">
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Approver position="主管" />
        <Approver position="人事" />
        <Approver position="经理" />
      </div>
    </ApprovalProcessWrapper>
  );
};

const Form = () => {
  const [date, setDate] = useState<{ startAt?: Date; endAt?: Date }>();

  const duration = useMemo(() => {
    if (date?.startAt && date?.endAt) {
      const result = getDiff(date.startAt, date.endAt);
      if (!result.trim()) return null;
      return result;
    } else {
      return null;
    }
  }, [date?.startAt, date?.endAt]);

  return (
    <div className="relative mt-4 p-4 bg-radial from-primary-200 to-primary-200/30 rounded-3xl">
      <OfficialBadge label="好旺担保" color="green" />
      <p className="text-lg text-center py-1 text-white mb-7 w-fit px-8 rounded-tl-xl rounded-br-xl font-bold bg-gradient-to-r from-primary to-primary-500/90">
        加班条
      </p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast('您的加班申请已提交成功.', {
            className: '!w-1/2 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        {/*--- 请假类型 ---*/}
        <FormFieldWrapper label="加班类型">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="加班类型"
            items={[
              { lable: '工作日', value: '工作日' },
              { lable: '周末', value: '周末' },
              { lable: '节假日', value: '节假日' },
              { lable: '休息日', value: '休息日' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 开始日期 ---*/}
        <FormFieldWrapper label="开始日期">
          <DateTimeCustomPicker
            className="rounded-lg h-10 bg-white border-none"
            id="开始时间"
            placeholder="开始时间"
            onSelected={(date) => setDate((pre) => ({ ...pre, startAt: date }))}
          />
        </FormFieldWrapper>

        {/*--- 截止日期 ---*/}
        <FormFieldWrapper label="截止日期">
          <DateTimeCustomPicker
            className="rounded-lg h-10 bg-white border-none"
            placeholder="截止时间"
            onSelected={(date) => setDate((pre) => ({ ...pre, endAt: date }))}
          />
        </FormFieldWrapper>

        {/*--- 合计请假时长 ---*/}
        {duration && (
          <FormFieldWrapper label="合计请假时长">
            <div className="relative">
              <div className="rounded-lg flex flex-col justify-center pl-2 h-10 bg-white border-none text-xs">
                <span className="bg-primary text-white font-bold w-fit py-1.5 px-3 rounded-lg">
                  {duration}
                </span>
                <IconStopwatch className="absolute top-1/2 -translate-y-1/2 right-2 text-primary" />
              </div>
            </div>
          </FormFieldWrapper>
        )}

        {/*--- 请假事由 ---*/}
        <FormFieldWrapper label="加班事由">
          <Textarea
            placeholder="填写您加班原因事由 ..."
            className="h-42 rounded-lg bg-white border-none"
          />
        </FormFieldWrapper>

        <div>
          <Button type="submit" className="w-full cursor-pointer font-bold h-11 rounded-xl">
            提交加班申请
          </Button>
        </div>
      </form>
    </div>
  );
};
