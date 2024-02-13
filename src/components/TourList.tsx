'use client'
import { useEffect } from 'react'
import { TicketService } from 'services'

export default function TourList() {
  useEffect(() => {
    TicketService.getTicketsClient({ page: 1, limit: 6 }).then(console.log)
  }, [])
  return <div className="h-40 flex-1 bg-gray-00"></div>
}
