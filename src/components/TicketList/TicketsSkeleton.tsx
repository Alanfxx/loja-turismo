export default function TicketsSkeleton() {
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
