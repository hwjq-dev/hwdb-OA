'use client';

import { IconInfoCircle, IconRefresh, IconUser } from '@tabler/icons-react';
import { CircleCheckBig } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAccountDetect } from '@/hooks/use-account-detect';

const inputClassName = 'rounded-md text-sm border-none shadow-none bg-gray-100';

export const ProfilePersonalInformation = () => {
  const { level } = useAccountDetect();

  return (
    <div className="p-4 h-[84dvh] overflow-auto pb-6 scrollbar-none">
      <form className="space-y-4">
        <div className="shadow-[0px_0px_23px_0px_rgba(0,_0,_0,_0.1)] p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="bg-primary/5 p-2 rounded-full">
              <IconUser className="size-5 text-orange" />
            </span>
            <span>基础信息</span>
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">姓名</label>
              <Input placeholder="" defaultValue="例明华" className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">性别</label>
              <Input placeholder="" defaultValue="男" className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">电话号码</label>
              <Input
                placeholder=""
                defaultValue="+85510639109"
                className={inputClassName}
                disabled
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">出生日期</label>
              <Input placeholder="" defaultValue="2003-05-12" className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">居住地址</label>
              <Input placeholder="" defaultValue="金边" className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">语言沟通</label>
              <Input
                placeholder=""
                defaultValue="汉语,英语,柬埔寨语"
                className={inputClassName}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="shadow-[0px_0px_23px_0px_rgba(0,_0,_0,_0.1)] p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="bg-primary/5 p-2 rounded-full">
              <IconInfoCircle className="size-5 text-orange" />
            </span>
            <span>基础信息</span>
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">工号</label>
              <Input placeholder="" defaultValue="CP-23" className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">电报ID</label>
              <Input placeholder="" defaultValue="128790465" className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">部门</label>
              <Input placeholder="" defaultValue="产品" className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">职位</label>
              <Input placeholder="" defaultValue={level} className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">岗位</label>
              <Input placeholder="" defaultValue="测试" className={inputClassName} disabled />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium">入职期间</label>
              <Input placeholder="" defaultValue="2025-03-01" className={inputClassName} disabled />
            </div>
          </div>
        </div>
      </form>
      <div className="mt-5 flex justify-center">
        <Button
          size="lg"
          className="w-3/4 mx-auto rounded-full !bg-gradient-to-r bg-primary to-primary-500 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            toast(`您的信息已切换成功.`, {
              className: '!w-3/4 !ml-auto !mr-6',
              icon: <CircleCheckBig className="text-green-500" />,
              position: 'top-center',
            });
          }}
        >
          <IconRefresh className="size-4 text-cyan-500" />
          换用官方资料
        </Button>
      </div>
    </div>
  );
};
