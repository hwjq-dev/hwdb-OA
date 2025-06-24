'use client';

import { useState } from 'react';

import { DatePicker } from '@/components/molecules/date';
import { SearchInput } from '@/components/molecules/search-input';
import { SearchSelect } from '@/components/molecules/search-select';
import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { IconAdjustments } from '@tabler/icons-react';

export const HighPositionFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex space-x-1.5 items-center pt-3 mx-2">
      <SearchInput />
      <Drawer open={open} onOpenChange={(p) => setOpen(p)}>
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
            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark text-sm">
                任务状态
              </Label>
              <CustomSelect
                defaultValue="执行中"
                onChange={(v) => null}
                placeholder="选择状态"
                items={[
                  { lable: '执行中', value: '执行中' },
                  { lable: '已超时', value: '已超时' },
                  { lable: '已审核', value: '已审核' },
                  { lable: '审核中', value: '审核中' },
                ]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark text-sm">
                任务日期
              </Label>
              <DatePicker />
            </div>

            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark text-sm">
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

            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark text-sm">
                任务负责任
              </Label>
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
          </div>

          <div className="border-t border-t-gray-500/30 border-dashed my-5" />

          <DrawerFooter className="grid grid-cols-2 gap-x-2 p-0 pb-2">
            <DrawerClose asChild>
              <Button
                variant="outline"
                className="rounded-sm border-primary text-primary font-semibold"
              >
                取消
              </Button>
            </DrawerClose>
            <Button onClick={() => setOpen(false)} className="rounded-sm font-semibold">
              过滤
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
