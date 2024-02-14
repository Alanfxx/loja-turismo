import { TTicket } from 'types'
import Image from 'next/image'
import { ArrowRightIcon, PinIcon } from 'icons'
import { isValidHttpUrl } from 'utils'
import { Button, If } from 'components'
import Reviews from './Reviews'
import Price from './Price'

export default function TicketItem(props: Readonly<{ ticket: TTicket }>) {
  const { ticket } = props

  return (
    <div className="group flex h-[23.3rem] max-h-[23.3rem] flex-1 bg-gray-00 shadow-s">
      <div className="flex h-[23.3rem] max-h-full w-[21.3rem] items-center overflow-clip bg-gray-10">
        <If condition={isValidHttpUrl(ticket.image)}>
          <Image
            src={ticket.image}
            alt="Imagem ilustrativa do tour"
            width={213}
            height={233}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </If>
      </div>

      <div className="flex flex-1 px-6 py-8">
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="text-heading-3">{ticket.name}</h1>
          <div className="flex items-center gap-1">
            <PinIcon className="size-6 text-brand-color-blue" />
            <p>{ticket.location}</p>
          </div>
          <Reviews rating={ticket.rating} />
        </div>

        <div className="flex min-w-[17.8rem] flex-col justify-center gap-6 border-l ps-6">
          <Price price={ticket.price} />

          <Button>
            <span>Saber mais</span>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
