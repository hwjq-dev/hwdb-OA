'use client';

import { DatePicker } from '@/components/molecules/date';
import { SearchInput } from '@/components/molecules/search-input';
import { CustomSelect } from '@/components/molecules/select';
import { SheetContainer } from '@/components/molecules/sheet-container';
import { Label } from '@/components/ui/label';
import { useDiscloser } from '@/hooks/use-discloser';

export const ApprovalFilter = () => {
  const { isOpen, close, toggle } = useDiscloser();

  return (
    <div className="flex space-x-1.5 items-center">
      <div className="pt-2 grow">
        <SearchInput placeholder="搜索申请编号 ..." />
      </div>
      <SheetContainer
        open={isOpen}
        triggerBtnLabel="过滤"
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
                审批类型
              </Label>
              <CustomSelect
                onChange={(v) => null}
                placeholder="选择审批类型"
                items={[
                  { lable: '请假', value: '请假' },
                  { lable: '加班', value: '加班' },
                  { lable: '调休', value: '调休' },
                  { lable: '调班', value: '调班' },
                ]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                申请日期
              </Label>
              <DatePicker />
            </div>
          </div>
          <div className="border-t border-t-gray-500/30 border-dashed my-5" />
        </form>
      </SheetContainer>
    </div>
  );
};
