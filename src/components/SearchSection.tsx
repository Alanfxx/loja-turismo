'use client'
import { useTicketController } from 'controllers'
import { PinIcon, SearchIcon } from 'icons'
import { KeyboardEventHandler } from 'react'
import { useFilterStore } from 'store'

export default function SearchSection() {
  const { search, setSearch, setPage } = useFilterStore()
  const ticketController = useTicketController()

  const onKeyDownInput: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === 'Enter') loadSearch()
  }

  function loadSearch() {
    setPage(1)
    ticketController.loadTickets({ page: 1, limit: 6, search })
  }

  return (
    <section className="sticky top-0 z-10 flex h-[10rem] items-center bg-gray-00 px-xs">
      <div className="page-width flex h-[4.8rem] border">
        <div className="p-3">
          <PinIcon className="size-6 text-brand-color-blue" />
        </div>

        <input
          type="text"
          placeholder="Busque por atração"
          className="flex-1 text-paragraph-2 outline-none"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={onKeyDownInput}
        />

        <button className="border-l p-3" onClick={loadSearch} disabled={!search}>
          <SearchIcon className="size-6 text-gray-20" />
        </button>
      </div>
    </section>
  )
}
