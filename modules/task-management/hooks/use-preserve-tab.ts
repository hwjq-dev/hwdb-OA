import { create } from 'zustand';

interface TabStore {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

export const usePreserveTab = create<TabStore>()((set) => ({
  activeTab: '',
  setActiveTab: (activeTab) => set({ activeTab }),
}));
