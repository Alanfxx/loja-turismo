import { HttpStatusCode } from 'enums'
import { TResponse, TTicket, TTicketQuery } from 'types'
const baseUrl = process.env.API_BASEURL

async function getTickets(query: TTicketQuery): Promise<TResponse<Array<TTicket>>> {
  const { page, limit, search } = query
  const queryString = new URLSearchParams()
  page && queryString.append('page', page.toString())
  limit && queryString.append('limit', limit.toString())
  search && queryString.append('search', search)

  const response = await fetch(`${baseUrl}/v1/tickets?${queryString}`)

  if (response.ok) {
    return { data: await response.json() }
  }

  if (response.status === HttpStatusCode.NotFound || response.status === HttpStatusCode.NoContent) {
    return { data: [] }
  }

  return { error: { message: 'Ocorreu um erro ao obter os tickets.', status: response.status } }
}

async function getTicketsClient(query: TTicketQuery): Promise<TResponse<Array<TTicket>>> {
  const { page, limit, search } = query
  const queryString = new URLSearchParams()
  page && queryString.append('page', page.toString())
  limit && queryString.append('limit', limit.toString())
  search && queryString.append('search', search)

  const response = await fetch(`/api/tickets?${queryString}`)

  if (response.ok) {
    return { data: await response.json() }
  }

  return { error: await response.json() }
}

export default { getTickets, getTicketsClient }
