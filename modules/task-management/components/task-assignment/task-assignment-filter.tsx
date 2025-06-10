'use client';

import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import { DatePicker } from '@/components/molecules/date';
import { SearchInput } from '@/components/molecules/search-input';
import { SearchSelect } from '@/components/molecules/search-select';
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

export const TaskAssignmentFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex space-x-1.5 items-center pt-3 mx-2">
      <SearchInput />
      <Drawer open={open} onOpenChange={(p) => setOpen(p)}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="h-10">
            <span className="text-dark">过滤任务</span>
            <span>
              <ChevronsUpDown className="text-primary" />
            </span>
          </Button>
        </DrawerTrigger>

        <DrawerContent
          className="p-4 !rounded-t-3xl"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DrawerTitle className="pb-5 pt-3">选择过滤选项</DrawerTitle>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                负责人
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

            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                任务日期
              </Label>
              <DatePicker />
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
