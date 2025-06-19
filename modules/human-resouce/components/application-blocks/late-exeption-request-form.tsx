'use client';

import { CircleCheckBig } from 'lucide-react';
import { toast } from 'sonner';

import DateTimeCustomPicker from '@/components/molecules/day-picker';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { FormFieldWrapper } from './base/form-field-wrapper';

export const LateExeptiontRequestForm = () => {
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
        免迟到表
      </p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast('您的免迟到申请已提交成功.', {
            className: '!w-3/4 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        {/*--- 免迟到日期 ---*/}
        <FormFieldWrapper label="免迟到日期">
          <DateTimeCustomPicker
            className="rounded-lg h-10 bg-white border-none"
            id="免迟到日期"
            placeholder="选择免迟到日期"
            onSelected={(date) => null}
          />
        </FormFieldWrapper>

        {/*--- 调休事由 ---*/}
        <FormFieldWrapper label="免迟到原因">
          <Textarea
            placeholder="填写您免迟到原因 ..."
            className="h-42 rounded-lg bg-white border-none"
          />
        </FormFieldWrapper>

        <div>
          <Button type="submit" className="w-full cursor-pointer font-bold h-11 rounded-xl">
            提交免迟到申请
          </Button>
        </div>
      </form>
    </div>
  );
};
