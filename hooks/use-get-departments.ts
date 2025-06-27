import { useQuery } from '@tanstack/react-query';

import { getDepartments } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';

export const useGetDepartmennts = () => {
  const query = useQuery({
    queryKey: [QUERY_KEY.departments],
    queryFn: getDepartments,
    gcTime: 3000000, // 50 minutes
  });
  return query;
};
