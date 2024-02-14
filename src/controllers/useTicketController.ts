import { TicketService } from 'services'
import { useFilterStore, useTicketStore } from 'store'

export default () => {
  const { setTickets, setLoading, setError, setTotal } = useTicketStore()
  const { page, limit, search, setPage } = useFilterStore()

  async function loadTickets() {
    setLoading(true)
    setError(undefined)
    loadTotal()
    const response = await TicketService.getTicketsClient({ page, limit, search })
    setLoading(false)

    if (response.error) return setError(response.error.message)
    setTickets(response.data)
  }

  async function loadTotal() {
    const response = await TicketService.getTicketsClient()
    if (response.data) {
      setTotal(response.data.length)
    }
  }

  function nextPage() {
    setPage(page + 1)
  }

  function prevPage() {
    setPage(page - 1)
  }

  return { loadTickets, nextPage, prevPage }
}
