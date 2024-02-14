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
        <TicketsSkeleton />
      </If>
      <If condition={!!error}>
        <h1>{error}</h1>
      </If>
      <If condition={!error && !loading}>
        {tickets?.map(t => <TourItem ticket={t} key={t.id} />)}
      </If>
    </div>
  )
}

function TicketsSkeleton() {
  return (
    <>
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="h-[23.3rem] w-full animate-pulse bg-gray-10 shadow-s"></div>
        ))}
    </>
  )
}
