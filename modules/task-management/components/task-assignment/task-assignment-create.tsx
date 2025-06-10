'use client';

import { Plus } from 'lucide-react';

import DateTimeCustomPicker from '@/components/molecules/day-picker';
import { BaseModal } from '@/components/molecules/modal/base-modal';
import { SearchSelect } from '@/components/molecules/search-select';
import { CustomSelect } from '@/components/molecules/select';
import { TextInput } from '@/components/molecules/text-input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useDiscloser } from '@/hooks/use-discloser';

export const TaskAssignmentCreate = () => {
  const { isOpen, close, toggle } = useDiscloser();

  return (
    <div className="px-2 pt-2">
      <div
        className="bg-white flex items-center justify-between border border-gray-1200 px-3 w-full h-12 rounded-md shadow-[0px_2px_56px_-13px_#a3b0b8]
"
      >
        <span className="text-sm text-dark font-medium">分配任务</span>
        <BaseModal
          open={isOpen}
          title="员工分配任务"
          description="请输入以下申请表单"
          icon={<Plus className="size-4 text-primary" />}
          onClose={() => close()}
          onOpenChange={() => toggle()}
        >
          <form className="flex flex-col space-y-3">
            {/*--- Title ---*/}
            <TextInput label="请输入任务标题" onChange={(v) => null} />

            <div className="grid grid-cols-2 gap-2">
              {/*--- Select department ---*/}
              <SearchSelect
                placeholder="选择部门"
                items={[
                  { label: '运维部门', value: '运维部门' },
                  { label: '产品部门', value: '产品部门' },
                  { label: '技术部门', value: '技术部门' },
                  { label: '人事部门', value: '人事部门' },
                  { label: '交易员部门', value: '交易员部门' },
                ]}
                onChange={(value) => null}
              />

              {/*--- Select approver ---*/}
              <SearchSelect
                placeholder="选择负责任"
                items={[
                  { label: '明华', value: '明华' },
                  { label: '深泽', value: '深泽' },
                  { label: '丽丽', value: '丽丽' },
                  { label: '月圆', value: '月圆' },
                  { label: '明师', value: '明师' },
                ]}
                onChange={(value) => null}
              />
            </div>

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
            <Textarea placeholder="请输入任务描述 ..." onChange={(e) => null} />

            <Button type="submit" className="hover:!bg-primary/50">
              立即分配
            </Button>
          </form>
        </BaseModal>
      </div>
    </div>
  );
};
