import { Filters, SearchSection, TourList } from 'components'

export default function Home() {
  return (
    <>
      <SearchSection />
      <section className="flex items-center px-xxs py-9 lg:px-xs">
        <div className="page-width flex items-start gap-6">
          <Filters />
          <TourList />
        </div>
      </section>
    </>
  )
}
