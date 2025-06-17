import { NavMenu } from '@/components/nav-menu';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <NavMenu />
    </section>
  );
}
