import { BackSection } from '@/components/molecules/back-section';
import TemplateTaskDetail from '@/components/template/template-task-detail';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="查看进度" />
      <TemplateTaskDetail />
    </section>
  );
};

export default Page;
