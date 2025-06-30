'use client';

import { IconAdjustments } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

import { DatePicker } from '@/components/molecules/date';
import { SearchInput } from '@/components/molecules/search-input';
import { CustomSelect } from '@/components/molecules/select';
import { SheetContainer } from '@/components/molecules/sheet-container';
import { Label } from '@/components/ui/label';
import { useDiscloser } from '@/hooks/use-discloser';
import { useQueryFilterStore } from '@/hooks/use-query-filter';
import { queryDateConverter } from '@/lib/dayjs';
import { getStatusId } from '@/lib/get-status-id';
import { FormFieldWrapper } from '@/modules/human-resouce/components/application-blocks/base/form-field-wrapper';

export const TaskFilter: React.FC<{ showStatusFilter?: boolean; type: StatusType }> = ({
  showStatusFilter = false,
  type = '审核中',
}) => {
  const { isOpen, toggle } = useDiscloser();
  const { data, setQueryFilter } = useQueryFilterStore();
  const [filter, setFilter] = useState({ priority: data?.priority, query_date: data?.query_date });

  useEffect(() => {
    if (type) {
      const statusId = getStatusId(type);
      setQueryFilter({ type: statusId });
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <div className="flex space-x-1.5 items-center pt-2">
      <div className="pt-2 grow">
        <SearchInput
          defaultValue={data?.keywords}
          onChange={(value) => setQueryFilter({ keywords: value })}
        />
      </div>
      <SheetContainer
        btnCancelLable="清晰"
        triggerComponent={
          <button className="bg-primary w-12 h-9 flex justify-center items-center rounded-sm">
            <IconAdjustments className="text-white" />
          </button>
        }
        open={isOpen}
        onCancle={() => {
          setFilter({ priority: -1, query_date: '' });
        }}
        onOpenChange={toggle}
        onConfirm={() => {
          setQueryFilter({
            priority: filter?.priority as unknown as number,
            query_date: filter?.query_date,
          });
          toggle();
        }}
      >
        <form>
          <div className="grid grid-cols-2 gap-2">
            {/* <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                任务下发人
              </Label>
              <PositionLevelOptionsSelect placeholder="下发人" onChange={(v) => null} />
            </div> */}

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

            <FormFieldWrapper label="任务日期">
              <DatePicker
                date={filter?.query_date ? new Date(filter?.query_date) : undefined}
                onSelected={(date) => {
                  const dateFormat = queryDateConverter(new Date(date as Date));
                  setFilter((pre) => ({ ...pre, query_date: dateFormat }));
                }}
              />
            </FormFieldWrapper>

            {showStatusFilter && (
              <div className="space-y-2">
                <Label htmlFor="select" className="text-dark">
                  任务状态
                </Label>
                <CustomSelect
                  placeholder="选择状态"
                  defaultValue="申请中"
                  items={[
                    { lable: '申请中', value: '申请中' },
                    { lable: '执行中', value: '执行中' },
                    { lable: '审批中', value: '审批中' },
                    { lable: '已审批', value: '已审批' },
                    { lable: '已超时', value: '已超时' },
                  ]}
                  onChange={(value) => null}
                />
              </div>
            )}
          </div>
          <div className="border-t border-t-gray-500/30 border-dashed my-5" />
        </form>
      </SheetContainer>
    </div>
  );
};
