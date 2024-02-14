import { useFilterStore } from 'store'

export default function PaginationButton(props: Readonly<{ value: number }>) {
  const { setPage } = useFilterStore()

  return (
    <button
      onClick={() => setPage(props.value)}
      className="rounded px-2 py-0.5 font-medium hover:bg-gray-10"
    >
      {props.value}
    </button>
  )
}
