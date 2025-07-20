import { create } from 'zustand'

export const useContactStore = create((set) => ({
  search: '',
  setSearch: (value) => set({ search: value }),
  selectedContact: null,
  favorites: [],
  toggleFavorite: (contact) => 
    set((state) => {
      const isFavorited = state.favorites.some((c) => c.id === contact.id)
      return {
        favorites: isFavorited 
        ? state.favorites.filter((c) => c.id !== contact.id) 
        : [...state.favorites, contact]
      }
    })
}))