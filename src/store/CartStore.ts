import { TTicket } from 'types'
import { create } from 'zustand'

type TCartState = {
  tickets: Array<TTicket>
  addTicket: (ticket: TTicket) => void
}

export const useCartStore = create<TCartState>(set => ({
  tickets: [],
  addTicket: ticket =>
    set(state => {
      const ticketTemp = state.tickets.find(t => t.id === ticket.id)
      if (ticketTemp) ticketTemp.quantidade = ticketTemp.quantidade + 1
      else return { tickets: [...state.tickets, ticket] }
      return { tickets: [...state.tickets] }
    }),
}))
