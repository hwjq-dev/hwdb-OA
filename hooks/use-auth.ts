import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { LOCAL_STORAGE } from '@/lib/key-config';

interface AuthStore {
  data?: Partial<UserDataType>;
  setData: (data: UserDataType) => void;
  clearData: () => void;
  updateTokens: (tokens: { accessToken: string; refreshToken: string }) => void;
}

/**
 * Store first login data
 */
export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      data: {
        id: -1,
        department_id: -1,
        department_text: '',
        expires_in: -1,
        job_number: '',
        job_title: '',
        nickname: '',
        position_level: -1,
        position_level_text: '',
        access_token: '',
        refresh_token: '',
      },
      setData: (data) => set({ data }),
      clearData: () => set({}),
      updateTokens: ({ accessToken, refreshToken }) =>
        set((pre) => ({
          data: {
            ...pre.data,
            access_token: accessToken,
            refresh_token: refreshToken,
          },
        })),
    }),
    { name: LOCAL_STORAGE.userKey },
  ),
);
