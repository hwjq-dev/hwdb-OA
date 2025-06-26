import { getDepartments } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';
import { useQuery } from '@tanstack/react-query';

export const useGetDepartmennts = () => {
  const query = useQuery({
    queryKey: [QUERY_KEY.departments],
    queryFn: getDepartments,
  });
  return query;
};
