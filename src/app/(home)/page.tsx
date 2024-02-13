import { Filters, SearchSection } from 'components'

export default function Home() {
  return (
    <>
      <SearchSection />
      <section className="flex items-center px-xs py-9">
        <div className="page-width flex items-start gap-6">
          <Filters />
          <AtracaoList />
        </div>
      </section>
    </>
  )
}

function AtracaoList() {
  return <div className="h-40 flex-1 bg-gray-00"></div>
}
