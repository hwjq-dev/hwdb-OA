'use client';

import { IconLoader3 } from '@tabler/icons-react';
import { useEffect, useId } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useAuthStore } from '@/hooks/use-auth';
import { useQueryFilterStore } from '@/hooks/use-query-filter';
import { useGetTaskList } from '@/modules/task/hooks/use-task-list';

import { FilterListWrapper } from '../filter-list-wrapper';
import { TaskList } from '../task';

export const TabUnderRequestTaskListSection = () => {
  const scrollContainerId = useId();
  const { data } = useAuthStore();
  const { data: filter, clearData } = useQueryFilterStore();

  const {
    isLoading,
    fetchNextPage,
    hasNextPage,
    data: taskList,
  } = useGetTaskList({
    status: 1,
    processor_id: data?.id,
    keywords: filter?.keywords,
    priority: filter?.priority == -1 ? undefined : filter?.priority,
    query_date: filter?.query_date,
  });

  useEffect(() => {
    clearData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || !taskList) return null;

  return (
    <FilterListWrapper type="审核中">
      <div
        id={scrollContainerId}
        className="h-[calc(100dvh-338px)] mb-1 overflow-y-auto px-1 !scrollbar-none"
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
            variant="上级"
            items={taskList as TaskCardProps[]}
            emptyState={{
              title: '未审核中记录',
              subtitle: '尝试查看其他类型',
            }}
          />
        </InfiniteScroll>
      </div>
    </FilterListWrapper>
  );
};
