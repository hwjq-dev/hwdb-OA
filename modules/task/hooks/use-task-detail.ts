import { useQuery } from '@tanstack/react-query';

import { getTaskDetail } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';

export const useTaskDetail = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.taskDetail, id],
    queryFn: async () => await getTaskDetail(id),
  });
};
