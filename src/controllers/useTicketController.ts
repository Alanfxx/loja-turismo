import { TicketService } from 'services'
import { useTicketStore } from 'store'

export default () => {
  const { setTickets, setLoading, setError } = useTicketStore()

  async function loadTickets() {
    setLoading(true)
    setError(undefined)
    const response = await TicketService.getTicketsClient({ page: 1, limit: 6 })
    setLoading(false)
    if (response.error) return setError(response.error.message)
    setTickets(response.data)
  }

  return { loadTickets }
}
