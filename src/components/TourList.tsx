'use client'
import { useEffect, useState } from 'react'
import { TicketService } from 'services'
import { TTicket } from 'types'
import TourItem from './TourItem'

export default function TourList() {
  const [tickets, setTickets] = useState<Array<TTicket>>()

  useEffect(() => {
    TicketService.getTicketsClient({ page: 1, limit: 6 })
      .then(res => res.data)
      .then(setTickets)
  }, [])

  return (
    <div className="flex flex-1 flex-col gap-3.5">
      {tickets?.map(t => <TourItem ticket={t} key={t.id} />)}
    </div>
  )
}
