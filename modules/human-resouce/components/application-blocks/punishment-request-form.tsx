'use client';

import { IconExclamationCircle } from '@tabler/icons-react';
import { CircleCheckBig } from 'lucide-react';
import { toast } from 'sonner';

import DateTimeCustomPicker from '@/components/molecules/day-picker';
import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { FormFieldWrapper } from './base/form-field-wrapper';

export const PunishmentRequestForm = () => {
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
        处罚表
      </p>
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          toast('您的处罚申请已提交成功.', {
            className: '!w-3/4 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        {/*--- 工号 ---*/}
        <FormFieldWrapper label="工号">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="选择工号"
            items={[
              { lable: 'CP2-22', value: 'CP2-22' },
              { lable: 'CP2-21', value: 'CP2-21' },
              { lable: 'CP2-20', value: 'CP2-20' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 人工姓名 ---*/}
        <FormFieldWrapper label="人工姓名">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="选择姓名"
            items={[
              { lable: '明华', value: '明华' },
              { lable: '东起', value: '东起' },
              { lable: '深泽', value: '深泽' },
              { lable: '李华', value: '李华' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 处罚类型 ---*/}
        <FormFieldWrapper label="处罚类型">
          <CustomSelect
            className="rounded-lg !h-10 mb-0 !text-sm bg-white border-none"
            onChange={(v) => null}
            placeholder="处罚类型"
            items={[
              { lable: '通报批评', value: '通报批评' },
              { lable: '警告', value: '警告' },
              { lable: '记过', value: '记过' },
              { lable: '记大过', value: '记大过' },
              { lable: '辞退', value: '辞退' },
              { lable: '罚款', value: '罚款' },
              { lable: '免迟到', value: '免迟到' },
            ]}
          />
        </FormFieldWrapper>

        {/*--- 生效日期 ---*/}
        <FormFieldWrapper label="生效日期">
          <DateTimeCustomPicker
            className="rounded-lg h-10 bg-white border-none"
            placeholder="选择生效日期"
            onSelected={(date) => null}
          />
        </FormFieldWrapper>

        {/*--- 处罚原因 ---*/}
        <FormFieldWrapper label="处罚原因">
          <Textarea
            placeholder="填写您处罚原因 ..."
            className="h-42 rounded-lg bg-white border-none"
          />
        </FormFieldWrapper>

        {/*--- 处罚结果 ---*/}
        <FormFieldWrapper label="处罚结果">
          <Textarea
            placeholder="填写您处罚结果 ..."
            className="h-24 rounded-lg bg-white border-none"
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
