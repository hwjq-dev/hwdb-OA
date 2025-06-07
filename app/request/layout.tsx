import { NavMenu } from '@/components/nav-menu';

export default function TaskLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <NavMenu />
    </section>
  );
}
