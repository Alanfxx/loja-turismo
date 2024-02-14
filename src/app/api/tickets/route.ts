import { HttpStatusCode } from 'enums'
import { TicketService } from 'services'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number(searchParams.get('page'))
  const limit = Number(searchParams.get('limit'))
  const search = searchParams.get('search')

  const query = { page, limit, search: search ?? undefined }

  try {
    const response = await TicketService.getTickets(query)

    if (response.error)
      return Response.json({ message: response.error.message }, { status: response.error.status })

    if (response.data) return Response.json(response.data)
  } catch (error) {
    return Response.json(
      { message: 'Algo deu errado, tente novamente mais tarde.' },
      { status: HttpStatusCode.InternalServerError },
    )
  }
}
