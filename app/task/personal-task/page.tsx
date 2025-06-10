import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { PersonalTaskScreen } from '@/modules/task-management/screens/personal-task';

const Page: NextPage = () => {
  return (
    <section className="overflow-hidden h-[100dvh]">
      <BackSection label="个人任务" />
      <PersonalTaskScreen />
    </section>
  );
};

export default Page;
