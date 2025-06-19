'use client';

import { CircleCheckBig } from 'lucide-react';
import { toast } from 'sonner';

import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { FormFieldWrapper } from './base/form-field-wrapper';

export const ChangeDayoffRequestForm = () => {
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
        调休单
      </p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast('您的调休申请已提交成功.', {
            className: '!w-1/2 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        {/*--- 班类型 ---*/}
        {/* <FormFieldWrapper label="班类型">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="班类型"
            items={[
              { lable: '白班', value: '白班' },
              { lable: '中班', value: '中班' },
              { lable: '晚班', value: '晚班' },
              { lable: '大晚班', value: '大晚班' },
            ]}
          />
        </FormFieldWrapper> */}

        {/*--- 调休原时间 ---*/}
        <FormFieldWrapper label="调休原时间">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="选择原时间"
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

        {/*--- 调休后时间 ---*/}
        <FormFieldWrapper label="调休后时间">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="选择后时间"
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

        {/*--- 调休事由 ---*/}
        <FormFieldWrapper label="调休事由">
          <Textarea
            placeholder="填写您调休事由 ..."
            className="h-42 rounded-lg bg-white border-none"
          />
        </FormFieldWrapper>

        <div>
          <Button type="submit" className="w-full cursor-pointer font-bold h-11 rounded-xl">
            提交调休申请
          </Button>
        </div>
      </form>
    </div>
  );
};
