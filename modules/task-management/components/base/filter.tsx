'use client';

import { ChevronsUpDown } from 'lucide-react';

import { DatePicker } from '@/components/molecules/date';
import { SearchInput } from '@/components/molecules/search-input';
import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export const Filter = () => {
  return (
    <div className="flex space-x-1.5 items-center pt-2">
      <SearchInput />
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-10">
            <span className="text-dark">过滤任务</span>
            <span>
              <ChevronsUpDown className="text-primary" />
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[96dvw] mr-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="select" className="text-dark">
                过滤任务下发人
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
                过滤任务日期
              </Label>
              <DatePicker />
            </div>
          </div>

          <div className="border-t border-t-gray-500/30 border-dashed my-4" />
          <div className="flex justify-center">
            <Button size="sm">过滤</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
