import { PinIcon, SearchIcon } from 'icons'

export default function SearchSection() {
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
        />

        <button className="border-l p-3">
          <SearchIcon className="size-6 text-gray-20" />
        </button>
      </div>
    </section>
  )
}
