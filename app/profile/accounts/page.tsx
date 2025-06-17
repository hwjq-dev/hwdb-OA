import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { EmptyState } from '@/components/molecules/empty-state';

const Page: NextPage = () => {
  return (
    <section className="overflow-hidden h-[100dvh]">
      <BackSection label="账号设置" />
      <EmptyState title="暂时空白" subtitle="在实施界面" />
    </section>
  );
};

export default Page;
