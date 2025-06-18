'use client';

import { IconExclamationCircle, IconStopwatch } from '@tabler/icons-react';
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

export const LeaveRequestForm = () => {
  return (
    <div className="space-y-4">
      <ApprovalProcess />
      <Form />
      <Prompt />
    </div>
  );
};

const ApprovalProcess = () => {
  return (
    <ApprovalProcessWrapper label="请假审批流程" legend="有效请假申请需要通过四位审批者过程中">
      <div className="grid grid-cols-4 gap-6 mt-4">
        <Approver position="主管" />
        <Approver position="人事" />
        <Approver position="经理" />
        <Approver position="总经理" />
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
        请假单
      </p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast('您的请假申请已提交成功.', {
            className: '!w-1/2 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        {/*--- 请假类型 ---*/}
        <FormFieldWrapper label="请假类型">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="请假类型"
            items={[
              { lable: '病假', value: '病假' },
              { lable: '事假', value: '事假' },
              { lable: '婚假', value: '婚假' },
              { lable: '产假', value: '产假' },
              { lable: '陪产假', value: '陪产假' },
              { lable: '出差', value: '出差' },
              { lable: '年假', value: '年假' },
              { lable: '其他', value: '其他' },
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
        <FormFieldWrapper label="请假事由">
          <Textarea
            placeholder="填写您请假事由 ..."
            className="h-42 rounded-lg bg-white border-none"
          />
        </FormFieldWrapper>

        <div>
          <Button type="submit" className="w-full cursor-pointer font-bold h-11 rounded-xl">
            提交请假申请
          </Button>
        </div>
      </form>
    </div>
  );
};

const promptData = [
  {
    id: 1,
    text: '除病假，丧假，工伤假外，其余请假必须提前请假。',
  },
  {
    id: 2,
    text: '病假附医院相关病历，婚假附结婚证复印件，丧假副死亡证明；如无证明，统一于事假处理。',
  },
];

const Prompt = () => {
  return (
    <div className="p-4 bg-primary-200/50 rounded-2xl">
      <div className="flex items-center space-x-1 text-red-500 bg-white w-fit px-2.5 text-sm py-1.5 rounded-md font-bold">
        <span>
          <IconExclamationCircle className="size-5" />
        </span>
        <span>请假说明</span>
      </div>
      <ul className="bg-white mt-2 rounded-lg p-2 text-sm space-y-1">
        {promptData.map((x, i) => (
          <li key={i} className="text-sm">
            <span className="font-bold">{i + 1}</span> {x.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
