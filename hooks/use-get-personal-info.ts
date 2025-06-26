import { getPersonalInfo } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';
import { useQuery } from '@tanstack/react-query';

export const useGetPersonalInfo = () => {
  const query = useQuery({
    queryKey: [QUERY_KEY.personalInfo],
    queryFn: getPersonalInfo,
    gcTime: 3000000, // 50 minutes
  });
  return query;
};
