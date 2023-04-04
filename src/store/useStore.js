import { create } from "zustand";

const useStore = create((set) => ({
  sidebarActive: false,
  setSidebarActive: () => set((state) => ({sidebarActive: !state.sidebarActive})),
}));

export default useStore;
