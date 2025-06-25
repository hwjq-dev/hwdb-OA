import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

import { MultiSelect } from '@/components/multi-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormFieldWrapper } from '@/modules/human-resouce/components/application-blocks/base/form-field-wrapper';

export const AnnoucementCreateForm = () => {
  return (
    <form
      className="relative px-5 py-7 mx-1 mt-3.5 space-y-5 border border-gray-200/60 rounded-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        toast('发布已成功.', {
          className: '!w-1/2 !ml-auto !mr-6',
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-center',
        });
      }}
    >
      <div className="absolute bg-white text-sm -top-3 left-4.5 px-1">
        <h2 className="font-bold">公告通知表</h2>
      </div>

      <FormFieldWrapper label="标题">
        <Input
          type="text"
          id="标题"
          placeholder="请输入标题 ..."
          className="py-1 h-11 px-3 text-sm border-none shadow-none bg-gray-100/80"
        />
      </FormFieldWrapper>

      <FormFieldWrapper label="推送到部门 (可选)">
        {/* <CustomSelect
          className="py-1 h-11 px-3 text-sm border-none shadow-none bg-gray-100/80"
          onChange={(v) => null}
          placeholder="选择部门"
          items={[
            { lable: '产品部', value: '产品部' },
            { lable: '运维部', value: '运维部' },
            { lable: '技术部', value: '技术部' },
            { lable: '运营部', value: '运营部' },
          ]}
        /> */}

        {/* <MultipleSelector
          // value={[{ label: '产品部', value: '产品部' }]}
          onChange={() => null}
          className="py-1 h-11 px-3 text-sm border-none shadow-none bg-gray-100/80 outline-none"
          defaultOptions={[
            { label: '产品部', value: '产品部' },
            { label: '运维部', value: '运维部' },
            { label: '技术部', value: '技术部' },
            { label: '运营部', value: '运营部' },
            { label: '运营部a', value: '运营部a' },
            { label: '运营部b', value: '运营部b' },
          ]}
          placeholder="选择部门"
          emptyIndicator={
            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
              没结果.
            </p>
          }
        /> */}
        <MultiSelect
          values={[
            { label: '产品部', value: '产品部' },
            { label: '运维部', value: '运维部' },
            { label: '技术部', value: '技术部' },
            { label: '运营部', value: '运营部' },
            { label: '运营部a', value: '运营部a' },
            { label: '运营部b', value: '运营部b' },
          ]}
          className="py-1 px-3 text-sm !border-none shadow-none bg-gray-100/80 !outline-none"
        />
      </FormFieldWrapper>

      <FormFieldWrapper label="描述 ">
        <Textarea
          id="描述"
          className="h-28 text-sm border-none bg-gray-100/80"
          placeholder="请输入您描述 ..."
        />
      </FormFieldWrapper>

      <div>
        <Button type="submit" className="w-full h-11 rounded-xl">
          立即发布
        </Button>
      </div>
    </form>
  );
};
