import { Filters, SearchSection, TourList } from 'components'

export default function Home() {
  return (
    <>
      <SearchSection />
      <section className="flex items-center px-xs py-9">
        <div className="page-width flex items-start gap-6">
          <Filters />
          <TourList />
        </div>
      </section>
    </>
  )
}
