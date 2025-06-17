import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import {
  TaskReportHeaderSection,
  TaskReportPieChar,
} from '@/modules/task/components/high-position/task-report';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="分析与报告" />
      <div className="p-2 space-y-2">
        <TaskReportHeaderSection />
        <TaskReportPieChar />
      </div>
    </section>
  );
};

export default Page;
