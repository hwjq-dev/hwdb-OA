import { useQuery } from '@tanstack/react-query';

import { getStaffs, IStaffOptionFilter } from '@/api';
import { QUERY_KEY } from '@/lib/key-config';

export const useGetStaffs = (options: IStaffOptionFilter) => {
  return useQuery({
    queryKey: [QUERY_KEY.taskDetail, options],
    queryFn: async () => await getStaffs(options),
  });
};
