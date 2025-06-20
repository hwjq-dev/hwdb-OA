'use client';

import { CircleX } from 'lucide-react';
import { redirect, RedirectType } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ROUTES } from '@/config/route';
import { useAccountDetect } from '@/hooks/use-account-detect';

import { Button } from '../ui/button';

export const TestLogin = () => {
  const { level, setLevel } = useAccountDetect();

  useEffect(() => {
    setLevel('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="size-full bg-primary flex items-center justify-center">
      <div className="flex flex-col space-y-2.5">
        <p className="text-center text-3xl font-bold text-white">OA 测试登陆</p>
        <div>
          <Select onValueChange={(value) => setLevel(value)}>
            <SelectTrigger className="w-[180px] !text-white">
              <SelectValue placeholder={<span className="!text-white">选择级别</span>} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="员工">员工</SelectItem>
              <SelectItem value="主管">主管</SelectItem>
              <SelectItem value="经理">经理</SelectItem>
              <SelectItem value="总经理">总经理</SelectItem>
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
