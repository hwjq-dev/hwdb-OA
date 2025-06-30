import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { TaskDetail } from '@/modules/task/components/shared/task-detail';

interface PageProps {
  params: Promise<{ id: number }>;
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const taskId = (await params).id;
  return (
    <section className="overflow-x-hidden overflow-y-auto scrollbar-none h-[100dvh] pb-4 bg-gray-100">
      <BackSection label="查看详情" />
      <TaskDetail taskId={taskId} isReviewScreen={false} />
    </section>
  );
};

export default Page;
