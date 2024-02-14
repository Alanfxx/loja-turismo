import { ChevronDownIcon } from 'icons'
import { TSVG } from 'types'

export default function TicketSummaryDropDown(
  props: Readonly<{ title: string; description: string; icon: TSVG }>,
) {
  return (
    <div className="flex items-start gap-3.5">
      <props.icon className="size-6 text-brand-color-blue" />
      <div className="flex-1">
        <h1 className="mb-1 text-paragraph-22">{props.title}</h1>
        <p className="text-gray-40">{props.description}</p>
      </div>
      <ChevronDownIcon className="size-6 self-center" />
    </div>
  )
}
