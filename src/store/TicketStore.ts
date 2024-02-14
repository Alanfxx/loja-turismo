import { TTicket } from 'types'
import { create } from 'zustand'

type TTicketState = {
  tickets?: Array<TTicket>
  total?: number
  loading: boolean
  error?: string
  setTickets: (tickets?: Array<TTicket>) => void
  setLoading: (loading: boolean) => void
  setError: (error?: string) => void
  setTotal: (total?: number) => void
}

export const useTicketStore = create<TTicketState>(set => ({
  loading: true,
  setTickets: tickets => set({ tickets }),
  setLoading: loading => set({ loading }),
  setError: error => set({ error }),
  setTotal: total => set({ total }),
}))
