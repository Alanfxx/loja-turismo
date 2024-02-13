import { HttpStatusCode } from 'enums'
import { TicketService } from 'services'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') ?? 1
  const limit = searchParams.get('limit') ?? 6
  const search = searchParams.get('search') ?? undefined

  try {
    const response = await TicketService.getTickets({ page: +page, limit: +limit, search })

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
