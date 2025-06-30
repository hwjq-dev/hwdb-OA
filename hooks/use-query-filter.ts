import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LOCAL_STORAGE } from '@/lib/key-config';

interface QueryFields {
  keywords?: string;
  processor_id?: number;
  department_id?: number;
  priority?: number;
  status?: number;
  query_date?: string;
  type?: number;
}

interface QueryFilterStore {
  data?: QueryFields;
  setQueryFilter: (data: QueryFields) => void;
  clearData: () => void;
}

/**
 * Store first login data
 */
export const useQueryFilterStore = create<QueryFilterStore>()(
  persist(
    (set) => ({
      data: {
        department_id: undefined,
        keywords: undefined,
        priority: undefined,
        processor_id: undefined,
        query_date: undefined,
        status: undefined,
        type: 1,
      },
      setQueryFilter: (data) => set((pre) => ({ data: { ...pre.data, ...data } })),
      clearData: () => set({ data: {} }),
    }),
    { name: LOCAL_STORAGE.queryFilter },
  ),
);
