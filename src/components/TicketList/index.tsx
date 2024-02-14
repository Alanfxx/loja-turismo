'use client'
import { useEffect } from 'react'
import { useTicketStore } from 'store'
import { useTicketController } from 'controllers'
import { If } from 'components'
import TourItem from './TicketItem'
import TicketsSkeleton from './TicketsSkeleton'
import TicketPagination from './TicketPagination'

export default function TicketList() {
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
        <If condition={tickets?.length === 0}>
          <p
            className="flex h-[23.3rem] items-center justify-center bg-gray-00
            text-paragraph-1 text-gray-40 shadow-s"
          >
            Sem resultados
          </p>
        </If>

        {tickets?.map(t => <TourItem ticket={t} key={t.id} />)}

        <If condition={!!tickets?.length}>
          <TicketPagination />
        </If>
      </If>
    </div>
  )
}
