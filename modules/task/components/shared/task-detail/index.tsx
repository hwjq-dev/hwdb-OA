'use client';

import { IconStopwatch } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';

import { ITaskProcess } from '@/api';
import { Skeleton } from '@/components/ui/skeleton';
import { getDiff } from '@/lib/dayjs';
import { useTaskDetail } from '@/modules/task/hooks/use-task-detail';

import { AddProcessTaskForm, TaskProgressList } from '../task-progress';
import { TaskStatus } from '../task/task-status';

interface Props {
  taskId: number;
  isReviewScreen: boolean;
}

export const TaskDetail: React.FC<Props> = ({ taskId, isReviewScreen }) => {
  const { isLoading, isFetching, data } = useTaskDetail(taskId);

  if (isLoading || isFetching)
    return (
      <AnimatePresence>
        <motion.div key="task-detail-skeleton" exit={{ opacity: 0 }}>
          <div className="flex flex-col space-y-10 mt-3">
            <Skeleton className="relative space-y-2 px-2 mx-2 py-2 flex flex-col h-36 bg-white rounded-xl">
              <Skeleton className="w-24 h-5 rounded-md" />
              <Skeleton className="w-40 h-5 rounded-md" />
              <Skeleton className="w-full h-32 rounded-md" />
              <Skeleton className="w-28 h-5 absolute top-2 right-2 rounded-md" />
            </Skeleton>

            <Skeleton className="relative mt-1 px-4 mx-2 h-44 rounded-xl bg-white">
              <Skeleton className="absolute w-0.5 h-10 border-r border-dashed border-gray-300 -top-1/4 right-1/2" />

              <div className="relative pl-6 py-4 flex items-center space-x-3">
                <Skeleton className="size-3 absolute left-0 top-5 rounded-full ring ring-offset-2 ring-gray-200" />

                <Skeleton className="h-5 w-20 absolute -right-2 top-4 rounded-sm" />
                <div className="space-y-1.5 w-full">
                  <Skeleton className="w-40 h-4 rounded-md" />
                  <Skeleton className="w-52 h-5 rounded-md" />
                  <Skeleton className="w-full h-24 rounded-md" />
                </div>
              </div>
            </Skeleton>
          </div>
        </motion.div>
      </AnimatePresence>
    );

  if (!isLoading && !data) return <div>No data</div>;

  const timeLeft = getDiff(
    new Date(data?.created_at as string),
    new Date(data?.complete_time as string),
  ).trim();

  return (
    <div className="flex flex-col space-y-10 mt-1">
      <div className="relative px-4 rounded-xl border mx-2 border-gray-200/80 mt-2 py-4 bg-white">
        <div className="flex items-center space-x-1 absolute top-2 right-2 text-xs text-dark border border-primary-200/60 px-2 rounded-md py-1">
          <IconStopwatch className="size-5 text-primary" />
          <span>剩余 {timeLeft}</span>
        </div>

        {data?.status_text && (
          <div className="w-fit">
            <TaskStatus className="border rounded-2xl -mt-1" type={data?.status_text as never} />
          </div>
        )}

        {data?.task_number && <p className="text-xs text-dark mt-3">#{data?.task_number}</p>}

        {data?.title && (
          <p className="my-3 !leading-snug">
            <span className="font-bold">标题 : </span>
            <span className="font-medium">{data?.title}</span>
          </p>
        )}
        {data?.content && (
          <p className="p-2 bg-gray-100/80 text-dark rounded-md mt-1.5 text-sm">{data?.content}</p>
        )}
      </div>

      <div className="relative px-4 rounded-xl border mx-2 bg-white border-gray-200/80">
        <div className="absolute w-0.5 h-10 border-r border-dashed border-orange-300 -top-10 right-1/2" />
        <div className="pt-4 pb-6 flex items-center w-full justify-between">
          <p className="font-bold">任务操作流程</p>
          <AddProcessTaskForm
            taskId={taskId}
            isReviewScreen={isReviewScreen}
            type={data?.status_text as StatusType}
          />
        </div>
        <TaskProgressList items={data?.process as ITaskProcess[]} />
      </div>
    </div>
  );
};
