'use client';

import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import { DatePicker } from '@/components/molecules/date';
import { SearchInput } from '@/components/molecules/search-input';
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

export const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex space-x-1.5 items-center pt-2">
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
          <DrawerTitle className="pb-5 pt-3"> 选择过滤选项</DrawerTitle>
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
          </div>

          <div className="border-t border-t-gray-500/30 border-dashed my-5" />

          <DrawerFooter className="grid grid-cols-2 gap-x-2 p-0 pb-2">
            <DrawerClose asChild>
              <Button variant="outline" className="rounded-sm border-red text-red font-semibold">
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
