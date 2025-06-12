'use client';

import { NextPage } from 'next';

import TemplateTask from '@/components/template/template-task';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <TemplateTask variant="上级" />
    </section>
  );
};

export default Page;
