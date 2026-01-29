/* Placeholder for state management with Zustand */
import { create } from 'zustand'

interface Store {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const useStore = create<Store>((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}))
