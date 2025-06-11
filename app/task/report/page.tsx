import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { TaskReportScreen } from '@/modules/task-management/screens/task-report';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="分析与报告" />
      <TaskReportScreen />
    </section>
  );
};

export default Page;
