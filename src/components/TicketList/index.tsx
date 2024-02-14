'use client'
import { useEffect } from 'react'
import { useFilterStore, useTicketStore } from 'store'
import { useTicketController } from 'controllers'
import { If } from 'components'
import TourItem from './TicketItem'
import TicketsSkeleton from './TicketsSkeleton'
import TicketPagination from './TicketPagination'

export default function TicketList() {
  const { tickets, loading, error } = useTicketStore()
  const ticketController = useTicketController()
  const { page } = useFilterStore()

  useEffect(() => {
    ticketController.loadTickets()
  }, [page])

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
        <TicketPagination />
      </If>
    </div>
  )
}
