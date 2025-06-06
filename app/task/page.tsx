import { NextPage } from 'next';

import TemplateTask from '@/components/template/template-task';

const Page: NextPage = () => {
  return (
    <section className="overflow-hidden h-[100dvh]">
      <TemplateTask />
    </section>
  );
};

export default Page;
