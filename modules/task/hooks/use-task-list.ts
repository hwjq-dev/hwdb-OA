import { useQuery } from '@tanstack/react-query';

import { getTasks, ITaskResponses } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';

export const useGetTaskList = () => {
  const query = useQuery({
    queryKey: QUERY_KEY.$taskList('in-progress'),
    queryFn: async () => {
      const response = (await getTasks()) as ITaskResponses;
      return {
        page: response.data.current_page,
        limit: response.data.limit,
        hasMore: response.data.has_more,
        data: response.data.list.map((x) => ({
          id: x.id,
          tgId: '',
          title: x.title,
          subtitle: '',
          assignedAt: x.time_ago,
          tgUsername: '',
          nickName: x.creator_text || x.processor_text,
          assigner: x.reviewer_text,
          startAt: x.created_at,
          endAt: x.complete_time,
          department: x.department_text,
          priority: x.status,
          status:
            x.status_text == '执行中'
              ? 'in-progress'
              : x.status_text == '审核中'
                ? 'wait-approva'
                : 'approved',
        })),
      };
    },
    gcTime: 300000, // 5 minutes
  });
  return query;
};
