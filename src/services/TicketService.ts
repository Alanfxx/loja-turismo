import { HttpStatusCode } from 'enums'
import { TResponse, TTicket, TTicketQuery } from 'types'
const baseUrl = process.env.API_BASEURL

async function getTickets(query: TTicketQuery): Promise<TResponse<Array<TTicket>>> {
  const { page, limit, search } = query
  const queryString = new URLSearchParams()
  page && queryString.append('page', page.toString())
  limit && queryString.append('limit', limit.toString())
  search && queryString.append('search', search)

  const response = await fetch(`${baseUrl}/v1/tickets?${queryString}`, {
    next: { revalidate: 300 },
  })

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

  const response = await fetch(`/api/tickets?${queryString}`, { next: { revalidate: 300 } })

  if (response.ok) {
    return { data: await response.json() }
  }

  return { error: await response.json() }
}

async function getTicketById(id: string): Promise<TResponse<TTicket>> {
  const response = await fetch(`${baseUrl}/v1/tickets/${id}`, { next: { revalidate: 300 } })

  if (response.ok) {
    return { data: await response.json() }
  }

  return { error: { message: 'Ocorreu um erro ao obter o ticket.', status: response.status } }
}

export default { getTickets, getTicketsClient, getTicketById }
