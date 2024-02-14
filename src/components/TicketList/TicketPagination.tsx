import { If } from 'components'
import { useTicketController } from 'controllers'
import { ChevronLeftIcon, ChevronRightIcon } from 'icons'
import { useTicketStore, useFilterStore } from 'store'
import { addZero } from 'utils'
import PaginationButton from './PaginationButton'

export default function TicketPagination() {
  const { total } = useTicketStore()
  const { page, limit } = useFilterStore()
  const ticketController = useTicketController()

  if (!total) {
    return <div className="mt-3 h-[4rem] w-[40rem] animate-pulse self-end rounded bg-gray-10"></div>
  }

  return (
    <div className="mt-3 flex items-center justify-end gap-4">
      <span className="text-paragraph-4 text-gray-40">{total} Resultados</span>

      <div className="flex items-center gap-2">
        <span className="text-paragraph-4 font-medium">Página:</span>
        <select
          name="pagina"
          disabled
          className="min-w-[6rem] rounded border border-gray-40 px-2 py-1"
          defaultValue="01"
        >
          <option value="01">{addZero(page)}</option>
        </select>
      </div>

      <div className="flex items-center gap-2 text-brand-color-blue">
        <button
          onClick={() => ticketController.prevPage()}
          disabled={page === 1}
          className="rounded hover:bg-gray-10 disabled:text-brand-color-blue/50"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
        <If condition={page - 1 > 1}>
          <span>...</span>
        </If>
        <If condition={page > 1 && total / limit > page}>
          <PaginationButton value={page - 1} />
          <PaginationButton value={page} />
          <PaginationButton value={page + 1} />
        </If>
        <If condition={total / limit <= page}>
          <PaginationButton value={page - 2} />
          <PaginationButton value={page - 1} />
          <PaginationButton value={page} />
        </If>
        <If condition={page === 1}>
          <PaginationButton value={1} />
          <PaginationButton value={2} />
          <PaginationButton value={3} />
        </If>
        <If condition={total / limit > page + 1}>
          <span>...</span>
        </If>
        <button
          onClick={() => ticketController.nextPage()}
          className="rounded hover:bg-gray-10 disabled:text-brand-color-blue/50"
          disabled={total / limit <= page}
        >
          <ChevronRightIcon className="size-6" />
        </button>
      </div>
    </div>
  )
}
