'use client';

import { CircleX } from 'lucide-react';
import { redirect, RedirectType } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { ROUTES } from '@/config/route';
import { useAccountDetect } from '@/hooks/use-account-detect';
// import { useTelegramUserData } from '@/hooks/use-telegram-user-data';
import { useTgUserDateStore } from '@/store/use-tg-user-data-store';

import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export const TestLogin = () => {
  const [a, setA] = useState(true);
  // const { isLoading } = useTelegramUserData();
  const { level, setLevel } = useAccountDetect();
  const { data } = useTgUserDateStore();

  useEffect(() => {
    setLevel('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setA(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="size-full bg-primary flex items-center justify-center">
      <div className="flex flex-col space-y-2.5">
        <p className="text-center text-3xl font-bold text-white">OA 测试登陆</p>
        <div>
          <Select onValueChange={(value) => setLevel(value)}>
            <SelectTrigger className="w-[180px] !text-white">
              <SelectValue placeholder={<span className="!text-white">选择职级</span>} />
            </SelectTrigger>
            <SelectContent>
              {/*-- 上级 --*/}
              <SelectItem value="总经理">总经理</SelectItem>
              <SelectItem value="部门经理">部门经理</SelectItem>
              <SelectItem value="部门主管">部门主管</SelectItem>

              {/*-- 下级 --*/}
              <SelectItem value="组长">组长</SelectItem>
              <SelectItem value="组员">组员</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            if (!level) {
              return toast('请选择级别.', {
                icon: <CircleX className="text-red-500" />,
                position: 'top-right',
              });
            }
            return redirect(ROUTES.HR, RedirectType.replace);
          }}
        >
          登陆
        </Button>
      </div>
    </div>
  );
};
