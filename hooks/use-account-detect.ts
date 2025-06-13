import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DetectStore {
  level: string;
  setLevel: (level: string) => void;
}

export const useAccountDetect = create<DetectStore>()(
  persist(
    (set) => ({
      level: '',
      setLevel: (level) => set({ level }),
    }),
    { name: 'level-storage' }, // This will persist value in local storage
  ),
);
