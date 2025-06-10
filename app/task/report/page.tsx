import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="分析与报告" />
    </section>
  );
};

export default Page;
