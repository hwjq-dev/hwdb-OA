'use client';

import { NextPage } from 'next';

import TemplateTask from '@/components/template/template-task';
import { useAccountDetect } from '@/hooks/use-account-detect';

const Page: NextPage = () => {
  const { level } = useAccountDetect();

  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <TemplateTask variant={level as never} />
    </section>
  );
};

export default Page;
