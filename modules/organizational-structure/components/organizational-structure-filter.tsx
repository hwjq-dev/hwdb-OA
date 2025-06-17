'use client';

import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

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

export const OrganizationalStructureFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex space-x-1.5 items-center">
      <Drawer open={open} onOpenChange={(p) => setOpen(p)}>
        <div className="w-full flex items-center justify-between">
          <p className="font-bold text-lg">管理架构</p>
          <DrawerTrigger asChild>
            <Button variant="outline" className="h-10 rounded-xl">
              <span className="text-dark">过滤选项</span>
              <span>
                <ChevronsUpDown className="text-primary" />
              </span>
            </Button>
          </DrawerTrigger>
        </div>

        <DrawerContent
          className="p-4 !rounded-t-3xl"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DrawerTitle className="pb-5 pt-3">选择过滤选项</DrawerTitle>
          <div className="grid grid-cols-1 gap-2">
            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                部门
              </Label>
              <CustomSelect
                onChange={(v) => null}
                placeholder="选择部门"
                items={[
                  { lable: '全部', value: '全部' },
                  { lable: '产品部门', value: '产品部门' },
                  { lable: '人事部门', value: '人事部门' },
                  { lable: '技术部门', value: '技术部门' },
                  { lable: '财务部门', value: '财务部门' },
                ]}
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
