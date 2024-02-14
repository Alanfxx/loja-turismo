'use client'
import { useEffect } from 'react'
import TourItem from './TourItem'
import { useTicketStore } from 'store'
import { useTicketController } from 'controllers'
import { If } from 'components'

export default function TourList() {
  const { tickets, loading, error } = useTicketStore()
  const ticketController = useTicketController()

  useEffect(() => {
    ticketController.loadTickets()
  }, [])

  return (
    <div className="flex flex-1 flex-col gap-3.5">
      <If condition={loading}>
        <h1>Loading...</h1>
      </If>
      <If condition={!!error}>
        <h1>{error}</h1>
      </If>
      {tickets?.map(t => <TourItem ticket={t} key={t.id} />)}
    </div>
  )
}
