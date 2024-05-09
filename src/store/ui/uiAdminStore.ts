import { create } from 'zustand';


interface State {
  currentPath: string;
  isSideMenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
  updatePath: ( newPath: string ) => void;
}

export const useUIAdminStore = create<State>()( (set) => ({
  currentPath: 'default',
  isSideMenuOpen: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
  updatePath: ( newPath ) => set({ currentPath: newPath })
}));
