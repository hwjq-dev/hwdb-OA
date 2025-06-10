'use client';

import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { TaskHomeDetailScreen } from '@/modules/task-management/screens/home-detail';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="查看进度" />
      <TaskHomeDetailScreen />
    </section>
  );
};

export default Page;
