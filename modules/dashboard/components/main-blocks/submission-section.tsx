'use client';

import { IconProgressCheck, IconRosetteDiscountCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { ROLE_CONFIG } from '@/config/role';
import { ROUTES } from '@/config/route';
import { useAuthStore } from '@/hooks/use-auth';

const items: ItemProps[] = [
  {
    icon: <IconProgressCheck className="size-8 text-yellow-500" />,
    label: '发起审批中',
    link: ROUTES.HR_WAIT_APPROVAL,
  },
  {
    icon: <IconRosetteDiscountCheck className="size-8 text-green-500" />,
    label: '发起已审批',
    link: ROUTES.HR_APPROVED,
  },
  // {
  //   icon: <Send className="size-8 text-primary-500" />,
  //   label: '我发起的',
  //   link: ROUTES.HR_SUBMISSION,
  // },
];

export const HrViewSubmissionSection = () => {
  const { data } = useAuthStore();
  const position = data?.position_level;

  if (position == ROLE_CONFIG.总经理.id)
    return (
      <div>
        <div className="bg-gradient-to-r from-primary-300 via-50% via-primary-500 to-primary-300 p-4 mt-2 mx-4 rounded-2xl shadow-[0px_4px_30px_0px_#bababa]">
          <div className="grid grid-cols-4 gap-2">
            <div className="flex justify-center items-center flex-col bg-white/65 py-1.5 rounded-sm">
              <p className="text-[11px] text-dark">人工总数</p>
              <span className="text-lg font-bold">518</span>
            </div>

            <div className="flex justify-center items-center flex-col bg-white/65 py-1.5 rounded-sm">
              <p className="text-[11px] text-dark">部门总数</p>
              <span className="text-lg font-bold">15</span>
            </div>

            <div className="flex justify-center items-center flex-col bg-white/65 py-1.5 rounded-sm">
              <p className="text-[11px] text-dark">试用员工</p>
              <span className="text-lg font-bold">8</span>
            </div>

            <div className="flex justify-center items-center flex-col bg-white/65 py-1.5 rounded-sm">
              <p className="text-[11px] text-dark">离职人工</p>
              <span className="text-lg font-bold">10</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-4 mx-4 gap-2">
          <div className="bg-white p-2.5 rounded-xl shadow-[0px_4px_30px_0px_#bababa]">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative bg-gradient-to-br from-primary to-primary-400 px-1.5 py-1 text-white rounded-sm flex flex-col justify-center items-center">
                <p className="text-[11px]">待审批申请</p>
                <p className="text-sm font-bold">9</p>
              </div>

              <div className="relative bg-gradient-to-br from-primary to-primary-400 px-1.5 py-1 rounded-sm text-white flex flex-col justify-center items-center">
                <p className="text-[11px]">待审核任务</p>
                <p className="text-sm font-bold">14</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-xl shadow-[0px_4px_30px_0px_#bababa]">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative bg-gradient-to-br from-primary to-primary-400 px-1.5 py-1 text-white rounded-sm flex flex-col justify-center items-center">
                <p className="text-[11px]">加班员工</p>
                <p className="text-sm font-bold">10</p>
              </div>

              <div className="relative bg-gradient-to-br from-primary to-primary-400 px-1.5 py-1 rounded-sm text-white flex justify-center items-center flex-col">
                <p className="text-[11px]">请假员工</p>
                <p className="text-sm font-bold">14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-white p-4 mt-2 mx-4 rounded-2xl shadow-[0px_4px_30px_0px_#bababa]">
      <div className="grid grid-cols-2 gap-4 p-1">
        {items.map((x, i) => (
          <Link key={i} href={x.link || '#'}>
            <Item {...x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  icon: ReactNode;
  label: string;
  link?: string;
}

export const Item: React.FC<ItemProps> = ({ icon: Icon, label }) => (
  <div className="relative flex flex-col justify-center bg-gray-100/70 pb-2 px-6 rounded-2xl items-center space-y-1">
    <div className="bg-white p-1 rounded-full absolute -top-1/4 left-1/2 -translate-x-1/2">
      {Icon}
    </div>
    <p className="text-xs font-medium text-dark mt-8">{label}</p>
  </div>
);
