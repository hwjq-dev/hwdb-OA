import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import {
  PersonalTaskCreate,
  PersonalTaskList,
} from '@/modules/task/components/high-position/personal-task';
import { TaskFilter } from '@/modules/task/components/shared';

const Page: NextPage = () => {
  return (
    <section className="overflow-hidden h-[100dvh]">
      <BackSection label="个人任务" />
      <div className="px-2">
        <PersonalTaskCreate />
        <TaskFilter showStatusFilter />
        <PersonalTaskList />
      </div>
    </section>
  );
};

export default Page;
