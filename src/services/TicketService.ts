import { TResponse, TTicket, TTicketQuery } from 'types'
const baseUrl = process.env.API_BASEURL

async function getTickets(query?: TTicketQuery): Promise<TResponse<Array<TTicket>>> {
  const queryString = new URLSearchParams()
  if (query) {
    queryString.append('page', query.page.toString())
    queryString.append('limit', query.limit.toString())
    query.search && queryString.append('search', query.search)
  }

  const response = await fetch(`${baseUrl}/v1/tickets?${queryString}`)

  if (!response.ok) {
    return { error: { message: 'Ocorreu um erro ao obter os tickets.', status: response.status } }
  }

  return { data: await response.json() }
}

async function getTicketsClient(query?: TTicketQuery): Promise<TResponse<Array<TTicket>>> {
  const queryString = new URLSearchParams()
  if (query) {
    queryString.append('page', query.page.toString())
    queryString.append('limit', query.limit.toString())
    query.search && queryString.append('search', query.search)
  }

  const response = await fetch(`/api/tickets?${queryString}`)

  if (!response.ok) {
    return { error: await response.json() }
  }

  return { data: await response.json() }
}

export default { getTickets, getTicketsClient }
