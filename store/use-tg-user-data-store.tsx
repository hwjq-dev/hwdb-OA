import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserData {
  tgId?: string;
  nickName?: string;
  username?: string;
  department?: string;
  position?: string;
}

interface UserDataStore {
  data: UserData;
  setUserData: (data: UserData) => void;
}

export const useTgUserDateStore = create<UserDataStore>()(
  persist(
    (set) => ({
      data: {},
      setUserData: (data) => set((d) => ({ data: { ...d.data, ...data } })),
    }),
    { name: 'user-storage' }, // This will persist value in local storage
  ),
);
