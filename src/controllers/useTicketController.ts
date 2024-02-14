import { TicketService } from 'services'
import { useFilterStore, useTicketStore } from 'store'
import { TTicketQuery } from 'types'

export default () => {
  const { setTickets, setLoading, setError, setTotal } = useTicketStore()
  const { page, limit, search, setPage } = useFilterStore()

  async function loadTickets(query?: TTicketQuery) {
    setLoading(true)
    setError(undefined)
    loadTotal()
    query = query ?? { page, limit, search }
    const response = await TicketService.getTicketsClient(query)
    setLoading(false)

    if (response.error) return setError(response.error.message)
    setTickets(response.data)
  }

  async function loadTotal() {
    const response = await TicketService.getTicketsClient({ search })
    if (response.data) {
      setTotal(response.data.length)
    }
  }

  function nextPage() {
    setPageCtrl(page + 1)
  }

  function prevPage() {
    setPageCtrl(page - 1)
  }

  function setPageCtrl(value: number) {
    setPage(value)
    if (page != value) {
      loadTickets({ page: value, limit, search })
    }
  }

  return { loadTickets, nextPage, prevPage, setPageCtrl }
}
