import { useQuery } from '@tanstack/react-query';

import { getTaskStats } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';

export const useGetTaskStats = () => {
  return useQuery({
    queryKey: [QUERY_KEY.taskStats],
    queryFn: getTaskStats,
  });
};
