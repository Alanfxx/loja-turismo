import { Button, Divider, If } from 'components'
import { TTicket } from 'types'
import TicketSummaryDropDown from './TicketSummaryDropDown'
import { CalendarIcon, UserIcon } from 'icons'
import { numberToBrl } from 'utils'

export default function TicketSummary(props: Readonly<{ ticket: TTicket }>) {
  return (
    <div className="flex min-w-[35.3rem] flex-col gap-6 rounded-lg bg-gray-00 p-6 max-lg:w-full">
      <TicketSummaryDropDown
        title="Data do Ingresso"
        description="22/12/2022"
        icon={CalendarIcon}
      />
      <Divider />

      <TicketSummaryDropDown title="Ingressos" description="03 Ingressos" icon={UserIcon} />
      <Divider />

      <div className="text-paragraph-2 text-gray-40">
        <p className="mb-2 flex justify-between">
          <span>01 Ingresso infantil</span>
          <span>R$ 245,99</span>
        </p>
        <p className="flex justify-between">
          <span>02 Ingresso adultos</span>
          <span>R$ 245,99</span>
        </p>
      </div>
      <Divider />

      <p className="flex justify-between">
        <span className="text-paragraph-22">Valor total</span>
        <If condition={!props.ticket.price.discount}>
          <span className="text-heading-2 text-brand-color-blue">-</span>
        </If>
        <If condition={!!props.ticket.price.discount}>
          <span className="text-heading-2 text-brand-color-blue">
            R$ {numberToBrl(props.ticket.price.discount)}
          </span>
        </If>
      </p>

      <Button className="rounded py-4">
        <span className="text-lg font-medium">Comprar Ingresso</span>
      </Button>
    </div>
  )
}
