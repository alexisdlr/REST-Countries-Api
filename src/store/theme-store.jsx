import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useThemeStore = create()(
  persist(
    (set, get) => ({
      darkMode: true,
      toggleDarkMode: () => set({ darkMode: !get().darkMode}),
    }),
    {
      name: "theme",
    }
  )
);