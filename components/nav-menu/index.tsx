'use client';

import { Bell, ClipboardList, LayoutDashboard, UserRoundPen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/config/route';
import { cn } from '@/lib/utils';

export const NavMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-center absolute bg-white !bottom-0 right-0 left-0 !z-40 w-full px-3.5 h-16 shadow-[0px_-4px_25px_-13px_#a3b0b8]">
      <div className="grid grid-cols-4 gap-4">
        <Menu
          icon="check"
          label="工作台"
          active={pathname.startsWith(ROUTES.HR)}
          link={ROUTES.HR}
        />
        <Menu
          icon="notification"
          label="通知"
          active={pathname.startsWith(ROUTES.NOTIFICATION)}
          link={ROUTES.NOTIFICATION}
        />
        <Menu
          icon="list"
          label="任务"
          active={pathname.startsWith(ROUTES.TASK)}
          link={ROUTES.TASK}
        />
        <Menu
          icon="profile"
          label="我的"
          active={pathname.startsWith(ROUTES.PROFILE)}
          link={ROUTES.PROFILE}
        />
      </div>
    </div>
  );
};

type Icon = 'notification' | 'check' | 'list' | 'profile';

interface MenuProps {
  icon: Icon;
  label: string;
  link?: string;
  active: boolean;
}

const Menu: React.FC<MenuProps> = ({ active, icon, label, link }) => {
  const Icon = getIcon(icon);

  return (
    <Link href={link || '#'}>
      <div className="flex flex-col items-center justify-center">
        <Icon className={cn('text-dark/90 size-7', { 'text-primary': active })} />
        <span className={cn('font-medium text-dark', { 'text-primary': active })}>{label}</span>
      </div>
    </Link>
  );
};

function getIcon(type: Icon) {
  switch (type) {
    case 'notification':
      return Bell;

    case 'check':
      return LayoutDashboard;

    case 'list':
      return ClipboardList;

    default:
    case 'profile':
      return UserRoundPen;
  }
}
