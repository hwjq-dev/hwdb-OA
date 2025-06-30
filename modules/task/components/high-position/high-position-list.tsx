'use client';

import { IconLoader3 } from '@tabler/icons-react';
import { useEffect, useId } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useAuthStore } from '@/hooks/use-auth';
import { useQueryFilterStore } from '@/hooks/use-query-filter';

import { useGetTaskList } from '../../hooks/use-task-list';
import { TaskList } from '../shared';

export const HighPositionList = () => {
  const scrollContainerId = useId();
  const { data } = useAuthStore();
  const { data: filter, clearData } = useQueryFilterStore();

  const {
    isLoading,
    fetchNextPage,
    hasNextPage,
    data: taskList,
  } = useGetTaskList({
    status: filter?.status == -1 ? undefined : filter?.status,
    department_id: data?.department_id,
    keywords: filter?.keywords,
    priority: filter?.priority == -1 ? undefined : filter?.priority,
    query_date: filter?.query_date,
    processor_id: filter?.processor_id == -1 ? undefined : filter?.processor_id,
  });

  useEffect(() => {
    clearData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || !taskList) return null;

  return (
    <div
      id={scrollContainerId}
      className="mt-3 px-2 pb-4 !h-[calc(100dvh-410px)] overflow-y-auto !scrollbar-none"
    >
      <InfiniteScroll
        dataLength={taskList.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        scrollableTarget={scrollContainerId}
        className="contents"
        loader={
          <div className="flex justify-center pb-1 pt-4 items-center">
            <IconLoader3 className="animate-spin text-orange" />
          </div>
        }
      >
        <TaskList
          isApproval
          variant="下级"
          items={taskList as TaskCardProps[]}
          emptyState={{
            title: '未记录',
            subtitle: '尝试查看其他类型',
          }}
        />
      </InfiniteScroll>
    </div>
  );
};
