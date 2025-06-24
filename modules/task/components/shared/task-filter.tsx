'use client';

import { IconAdjustments } from '@tabler/icons-react';

import { DatePicker } from '@/components/molecules/date';
import { SearchInput } from '@/components/molecules/search-input';
import { CustomSelect } from '@/components/molecules/select';
import { SheetContainer } from '@/components/molecules/sheet-container';
import { Label } from '@/components/ui/label';
import { useDiscloser } from '@/hooks/use-discloser';

export const TaskFilter: React.FC<{ showStatusFilter?: boolean }> = ({
  showStatusFilter = false,
}) => {
  const { isOpen, close, toggle } = useDiscloser();

  return (
    <div className="flex space-x-1.5 items-center pt-2">
      <div className="pt-2 grow">
        <SearchInput />
      </div>
      <SheetContainer
        triggerComponent={
          <button className="bg-primary w-12 h-9 flex justify-center items-center rounded-sm">
            <IconAdjustments className="text-white" />
          </button>
        }
        open={isOpen}
        onCancle={close}
        onOpenChange={toggle}
        onConfirm={toggle}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                任务下发人
              </Label>
              <CustomSelect
                onChange={(v) => null}
                placeholder="下发人"
                items={[
                  { lable: '总经理', value: '总经理' },
                  { lable: '经理', value: '经理' },
                  { lable: '主管', value: '主管' },
                  { lable: '组长', value: '组长' },
                ]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                任务日期
              </Label>
              <DatePicker />
            </div>

            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                任务优先
              </Label>
              <CustomSelect
                placeholder="选择优先"
                items={[
                  { lable: '高优先', value: '高优先' },
                  { lable: '中优先', value: '中优先' },
                  { lable: '低优先', value: '低优先' },
                ]}
                onChange={(value) => null}
              />
            </div>

            {showStatusFilter && (
              <div className="space-y-2">
                <Label htmlFor="select" className="text-dark">
                  任务状态
                </Label>
                <CustomSelect
                  placeholder="选择状态"
                  items={[
                    { lable: '执行中', value: '执行中' },
                    { lable: '中', value: '审批中' },
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
