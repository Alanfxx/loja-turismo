import { useTicketController } from 'controllers'

export default function PaginationButton(props: Readonly<{ value: number }>) {
  const { setPageCtrl } = useTicketController()

  return (
    <button
      onClick={() => setPageCtrl(props.value)}
      className="rounded px-2 py-0.5 font-medium hover:bg-gray-10"
    >
      {props.value}
    </button>
  )
}
