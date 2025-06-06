'use client';

import { ClipboardList, MailIcon, SquareCheckBig, UserRoundPen } from 'lucide-react';
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
          icon="mail"
          label="消息"
          active={pathname === ROUTES.NOTIFICATION}
          link={ROUTES.NOTIFICATION}
        />
        <Menu
          icon="check"
          label="审批"
          active={pathname === ROUTES.REQUEST}
          link={ROUTES.REQUEST}
        />
        <Menu icon="list" label="任务" active={pathname === ROUTES.TASK} link={ROUTES.TASK} />
        <Menu icon="profile" label="我的" active={pathname === ROUTES.ABOUT} link={ROUTES.ABOUT} />
      </div>
    </div>
  );
};

type Icon = 'mail' | 'check' | 'list' | 'profile';

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
    case 'mail':
      return MailIcon;

    case 'check':
      return SquareCheckBig;

    case 'list':
      return ClipboardList;

    default:
    case 'profile':
      return UserRoundPen;
  }
}
