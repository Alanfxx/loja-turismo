import { TTicket } from 'types'
import { create } from 'zustand'

type TCartState = {
  tickets: Array<TTicket>
  addTicket: (ticket: TTicket) => void
  removeTicket: (id: string) => void
}

export const useCartStore = create<TCartState>(set => ({
  tickets: [],
  addTicket: ticket =>
    set(state => {
      const cartTicket = state.tickets.find(t => t.id === ticket.id)

      if (cartTicket) {
        cartTicket.quantidade = cartTicket.quantidade + 1
      } else {
        ticket.quantidade = 1
        return { tickets: [...state.tickets, { ...ticket, quantidade: 1 }] }
      }
      return { tickets: [...state.tickets] }
    }),
  removeTicket: id =>
    set(state => {
      return { tickets: state.tickets.filter(t => t.id !== id) }
    }),
}))
