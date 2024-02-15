import { TrashIcon } from 'icons'
import { TTicket } from 'types'
import { isValidHttpUrl, numberToBrl } from 'utils'
import Divider from './Divider'
import Image from 'next/image'
import If from './If'
import { useCartStore } from 'store'

export default function TicketCartItem(props: Readonly<{ ticket: TTicket }>) {
  const { ticket } = props
  const removeTicket = useCartStore(state => state.removeTicket)

  return (
    <div className="me-2 flex items-start gap-3">
      <div className="flex h-[6.2rem] w-[5.7rem] items-center overflow-clip bg-gray-10">
        <If condition={isValidHttpUrl(ticket.image)}>
          <Image
            src={ticket.image}
            alt="Ilustração do tour"
            width={57}
            height={62}
            className="object-cover"
          />
        </If>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex justify-between gap-3 text-gray-60">
          <h1 className="text-paragraph-2">{ticket.name}</h1>
          <button
            className="rounded-full p-1 hover:bg-gray-10"
            onClick={() => removeTicket(ticket.id)}
          >
            <TrashIcon className="size-4 hover:text-brand-color-black" />
          </button>
        </div>
        <p className="text-gray-40">1 Adulto: R$500,00 2 Crianças: R$234,33</p>
        <Divider />
        <div className="flex justify-between text-base text-gray-60">
          <span>Qtd {ticket.quantidade}</span>
          <span>R$ {numberToBrl(ticket.price.discount)}</span>
        </div>
        <p className="flex justify-between text-paragraph-22">
          <span>Subtotal</span>
          <span>R$ {numberToBrl(ticket.quantidade * ticket.price.discount)}</span>
        </p>
      </div>
    </div>
  )
}
