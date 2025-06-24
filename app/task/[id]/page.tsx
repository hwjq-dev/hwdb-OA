import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { TaskDetailScreen } from '@/modules/task/screens/task-detail-screen';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="查看详情" />
      <TaskDetailScreen type="normal" />
    </section>
  );
};

export default Page;
