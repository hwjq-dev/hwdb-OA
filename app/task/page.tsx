import { NextPage } from 'next';

import TemplateTask from '@/components/template/template-task';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh] bg-radial from-white bg-gray-100">
      <TemplateTask />
    </section>
  );
};

export default Page;
