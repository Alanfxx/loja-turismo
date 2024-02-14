import { create } from 'zustand'

type TFilterState = {
  page: number
  limit: number
  search: string
  setPage: (page: number) => void
  setLimit: (limit: number) => void
  setSearch: (search: string) => void
}

export const useFilterStore = create<TFilterState>(set => ({
  page: 1,
  limit: 6,
  search: '',
  setPage: page => set({ page }),
  setLimit: limit => set({ limit }),
  setSearch: search => set({ search }),
}))
