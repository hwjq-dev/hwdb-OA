'use client';

import { NavMenu } from '@/components/nav-menu';
import { usePathname } from 'next/navigation';

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
