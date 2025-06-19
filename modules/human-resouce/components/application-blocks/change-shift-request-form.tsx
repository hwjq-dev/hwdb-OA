'use client';

import { IconExclamationCircle } from '@tabler/icons-react';
import { CircleCheckBig } from 'lucide-react';
import { toast } from 'sonner';

import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { FormFieldWrapper } from './base/form-field-wrapper';

export const ChangeShiftRequestForm = () => {
  return (
    <div className="space-y-4">
      <Form />
      <Prompt />
    </div>
  );
};

const Form = () => {
  return (
    <div className="relative mt-4 p-4 bg-radial from-primary-200 to-primary-200/30 rounded-3xl">
      <p className="text-lg text-center py-1 text-white mb-7 w-fit px-8 rounded-tl-xl rounded-br-xl font-bold bg-gradient-to-r from-primary to-primary-500/90">
        调班单
      </p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast('您的调班申请已提交成功.', {
            className: '!w-1/2 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        {/*--- 原班类型 ---*/}
        <FormFieldWrapper label="原班类型">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="原班类型"
            items={[
              { lable: '白班', value: '白班' },
              { lable: '中班', value: '中班' },
              { lable: '晚班', value: '晚班' },
              { lable: '大晚班', value: '大晚班' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 调休原时间 ---*/}
        <FormFieldWrapper label="调休原时间">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="调休原时间"
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

        {/*--- 调休后时间 ---*/}
        <FormFieldWrapper label="调休后时间">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="调休后时间"
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

        {/*--- 调班事由 ---*/}
        <FormFieldWrapper label="调班事由">
          <Textarea
            placeholder="填写您调班事由 ..."
            className="h-42 rounded-lg bg-white border-none"
          />
        </FormFieldWrapper>

        <div>
          <Button type="submit" className="w-full cursor-pointer font-bold h-11 rounded-xl">
            提交申请
          </Button>
        </div>
      </form>
    </div>
  );
};

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
        <li className="text-sm">
          调班单需提1天以上申请，多级审批方可生效，无调班单私自调班视为无效
        </li>
      </ul>
    </div>
  );
};
