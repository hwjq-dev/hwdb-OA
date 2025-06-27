import { useQuery } from '@tanstack/react-query';

import { getPositionLevels } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';

export const useGetPositionLevels = () => {
  const query = useQuery({
    queryKey: [QUERY_KEY.positionLevel],
    queryFn: getPositionLevels,
    gcTime: 3000000, // 50 minutes
  });
  return query;
};
