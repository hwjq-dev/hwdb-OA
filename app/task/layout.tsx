'use client';

import { usePathname } from 'next/navigation';

import { NavMenu } from '@/components/nav-menu';

export default function TaskLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDetailPage = /^\/task\/[^/]+$/.test(pathname);

  return (
    <section>
      {children}
      {!isDetailPage && <NavMenu />}
    </section>
  );
}
