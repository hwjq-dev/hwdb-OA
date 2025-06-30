import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { TaskDetail } from '@/modules/task/components/shared/task-detail';

interface PageProps {
  params: Promise<{ id: number }>;
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const taskId = (await params).id;

  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="查看进度" />
      <TaskDetail taskId={taskId} isReviewScreen={true} />
    </section>
  );
};

export default Page;
