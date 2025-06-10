import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { TaskAssignmentScreen } from '@/modules/task-management/screens/task-assignment';

const Page: NextPage = () => {
  return (
    <section className="overflow-hidden h-[100dvh]">
      <BackSection label="分配任务" />
      <TaskAssignmentScreen />
    </section>
  );
};

export default Page;
