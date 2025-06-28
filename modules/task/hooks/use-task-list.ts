import { useInfiniteQuery } from '@tanstack/react-query';

import { getTasks, IFilterTaskOptions } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';

export const useGetTaskList = (options?: IFilterTaskOptions) => {
  const { isFetching, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, data } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.taskList, options],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => {
        const repnose = await getTasks({ ...options, page: pageParam || 1 });
        return repnose;
      },
      getNextPageParam: (lastPage) => {
        return lastPage.hasMore === 1 ? lastPage.page + 1 : undefined;
      },
    });
  const flatData = data?.pages.flatMap((x) => x.data);
  return { isFetching, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, data: flatData };
};
