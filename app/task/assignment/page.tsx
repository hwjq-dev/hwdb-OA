import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import {
  TaskAssignmentCreate,
  TaskAssignmentFilter,
  TaskAssignmentList,
} from '@/modules/task/components/high-position/task-assignment';

const Page: NextPage = () => {
  return (
    <section className="overflow-hidden h-[100dvh]">
      <BackSection label="分配任务" />

      <div>
        <TaskAssignmentCreate />
        <TaskAssignmentFilter />
        <TaskAssignmentList />
      </div>
    </section>
  );
};

export default Page;
