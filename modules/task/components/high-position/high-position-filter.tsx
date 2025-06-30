'use client';

import { IconAdjustments } from '@tabler/icons-react';
import { useState } from 'react';

import { StaffOptionsSelect } from '@/components/filter-options/staff-options-select';
import { StatusOptionsSelect } from '@/components/filter-options/status-options-select';
import { DatePicker } from '@/components/molecules/date';
import { SearchInput } from '@/components/molecules/search-input';
import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useDiscloser } from '@/hooks/use-discloser';
import { useQueryFilterStore } from '@/hooks/use-query-filter';
import { queryDateConverter } from '@/lib/dayjs';
import { FormFieldWrapper } from '@/modules/human-resouce/components/application-blocks/base/form-field-wrapper';

export const HighPositionFilter = () => {
  const { toggle, isOpen } = useDiscloser();
  const { data, setQueryFilter } = useQueryFilterStore();

  const [filter, setFilter] = useState({
    status: data?.status,
    priority: data?.priority,
    processor_id: data?.processor_id,
    query_date: data?.query_date,
  });

  return (
    <div className="flex space-x-1.5 items-center pt-3 mx-2">
      <SearchInput
        defaultValue={data?.keywords}
        onChange={(value) => setQueryFilter({ keywords: value })}
      />
      <Drawer open={isOpen} onOpenChange={toggle}>
        <DrawerTrigger asChild>
          <button className="bg-primary w-12 h-9 flex justify-center items-center rounded-sm">
            <IconAdjustments className="text-white" />
          </button>
        </DrawerTrigger>

        <DrawerContent
          className="p-4 !rounded-t-3xl"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DrawerTitle className="pb-5 pt-3">过滤选项</DrawerTitle>
          <div className="grid grid-cols-2 gap-4">
            <FormFieldWrapper label="任务状态">
              <StatusOptionsSelect
                defaultValue={filter.status?.toString() || '-1'}
                placeholder="选择状态"
                onChange={(value) =>
                  value && setFilter((pre) => ({ ...pre, status: Number(value) }))
                }
              />
            </FormFieldWrapper>

            <FormFieldWrapper label="任务日期">
              <DatePicker
                date={filter?.query_date ? new Date(filter?.query_date) : undefined}
                onSelected={(date) => {
                  const dateFormat = queryDateConverter(new Date(date as Date));
                  setFilter((pre) => ({ ...pre, query_date: dateFormat }));
                }}
              />
            </FormFieldWrapper>

            <FormFieldWrapper label="任务优先">
              <CustomSelect
                value={filter.priority?.toString() ?? '-1'}
                // defaultValue={filter.priority?.toString() ?? '-1'}
                placeholder="选择优先"
                items={[
                  { lable: '全部', value: '-1' },
                  { lable: '高优先', value: '3' },
                  { lable: '中优先', value: '2' },
                  { lable: '低优先', value: '1' },
                ]}
                onChange={(value) =>
                  value && setFilter((pre) => ({ ...pre, priority: Number(value) }))
                }
              />
            </FormFieldWrapper>

            <FormFieldWrapper label="负责任">
              <StaffOptionsSelect
                defaultValue={filter?.processor_id?.toString()}
                placeholder="选择负责任"
                onChange={(value) =>
                  value && setFilter((pre) => ({ ...pre, processor_id: Number(value) }))
                }
              />
            </FormFieldWrapper>
          </div>

          <div className="border-t border-t-gray-500/30 border-dashed my-5" />

          <DrawerFooter className="grid grid-cols-2 gap-x-2 p-0 pb-2">
            <Button
              variant="outline"
              onClick={() => {
                setFilter({ priority: -1, query_date: '', processor_id: -1, status: -1 });
              }}
              className="rounded-sm border-primary text-primary font-semibold"
            >
              清晰
            </Button>

            <Button
              onClick={() => {
                setQueryFilter({
                  status: filter?.status as number,
                  processor_id: filter?.processor_id as number,
                  priority: filter?.priority as unknown as number,
                  query_date: filter?.query_date,
                });
                toggle();
              }}
              className="rounded-sm font-semibold"
            >
              过滤
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
