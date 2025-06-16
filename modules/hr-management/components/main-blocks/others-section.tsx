'use client';

import {
  IconAdjustmentsPause,
  IconFileAnalytics,
  IconSitemap,
  IconUser,
} from '@tabler/icons-react';
import { LayoutGrid, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { ROUTES } from '@/config/route';
import { useAccountDetect } from '@/hooks/use-account-detect';
import { cn } from '@/lib/utils';

const items: ItemProps[] = [
  {
    icon: <Megaphone className="size-4 text-primary" />,
    label: '发布通知',
    className: 'bg-primary-200/60',
    textClassName: 'text-primary',
    link: ROUTES.PUBLISH,
  },
  {
    icon: <IconSitemap className="size-4 text-yellow-400" />,
    label: '组织架构',
    className: 'bg-yellow-100/60',
    textClassName: 'text-yellow-500',
    link: ROUTES.STRUCTURE,
  },
  {
    icon: <IconUser className="size-4 text-green-500" />,
    label: '用户档案',
    className: 'bg-green-100/70',
    textClassName: 'text-green-500',
    link: '#',
  },
  {
    icon: <IconAdjustmentsPause className="size-4 text-purple-500 bg-purple-50" />,
    label: '权限角色',
    className: 'bg-purple-100/70',
    textClassName: 'text-purple-500',
    link: '#',
  },
  {
    icon: <IconFileAnalytics className="size-4 text-pink-500 bg-purple-50" />,
    label: '操作日志',
    className: 'bg-pink-100/70',
    textClassName: 'text-pink-500',
    link: '#',
  },
];

export const OthersSection = () => {
  const { level } = useAccountDetect();
  if (level == '下级') return null;

  if (level == '上级')
    return (
      <div className="bg-white p-4 mx-4 rounded-2xl shadow-[0px_0px_45px_0px_#dbdbdb]">
        <div className="flex space-x-1 items-center">
          <span className="p-1 bg-primary/15 rounded-sm">
            <LayoutGrid className="size-3.5 text-primary" />
          </span>
          <p className="font-bold">常用功能</p>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3.5">
          {items.map((x, i) => (
            <Item key={i} {...x} />
          ))}
        </div>
      </div>
    );
};

interface ItemProps {
  icon: ReactNode;
  label: string;
  className?: string;
  link: string;
  textClassName?: string;
}

const Item: React.FC<ItemProps> = ({ icon: Icon, label, className, textClassName, link }) => {
  return (
    <Link href={link || '#'}>
      <div
        className={cn(
          'bg-primary-100 rounded-md px-2.5 py-1.5 flex items-center justify-between',
          className,
        )}
      >
        <span className={cn('text-sm text-primary font-medium', textClassName)}>{label}</span>
        <span className="p-1 bg-white rounded-full shadow-xs">{Icon}</span>
      </div>
    </Link>
  );
};
