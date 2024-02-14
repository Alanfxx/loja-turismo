import { TTicket } from 'types'
import Image from 'next/image'
import { ArrowRightIcon, HeartIcon, PinIcon } from 'icons'
import { isValidHttpUrl } from 'utils'
import { Button, If, Reviews } from 'components'
import Price from './Price'
import Link from 'next/link'
import { useCartStore } from 'store'

export default function TicketItem(props: Readonly<{ ticket: TTicket }>) {
  const { ticket } = props
  const addTicket = useCartStore(state => state.addTicket)

  return (
    <div className="group flex h-[23.3rem] max-h-[23.3rem] flex-1 bg-gray-00 shadow-s">
      <div className="relative flex h-[23.3rem] max-h-full w-[21.3rem] items-center overflow-clip bg-gray-10">
        <If condition={isValidHttpUrl(ticket.image)}>
          <Image
            src={ticket.image}
            alt="Imagem ilustrativa do tour"
            width={213}
            height={233}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </If>

        <div className="absolute left-3.5 right-3.5 top-3.5 flex items-center justify-between">
          <button className="rounded-full bg-gray-00 px-3 py-1 text-paragraph-4 shadow-m">
            Ingresso
          </button>
          <button onClick={() => addTicket(ticket)}>
            <HeartIcon
              className="size-6 rounded-xl text-gray-00 active:bg-gray-00/20
              active:text-support-04"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-1 px-6 py-8">
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="text-heading-3">{ticket.name}</h1>
          <div className="mb-8 flex items-center gap-1">
            <PinIcon className="size-6 text-brand-color-blue" />
            <p>{ticket.location}</p>
          </div>
          <Reviews rating={ticket.rating} />
        </div>

        <div className="flex min-w-[17.8rem] flex-col justify-center gap-6 border-l ps-6">
          <Price price={ticket.price} />

          <Link href={`/ingresso/${ticket.id}`}>
            <Button>
              <span>Saber mais</span>
              <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
