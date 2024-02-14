import {
  AirlineTicketIcon,
  ArrowBackIcon,
  CoffeeCupIcon,
  HomeHouseIcon,
  PinIcon,
  WifiIcon,
} from 'icons'
import Link from 'next/link'
import Image from 'next/image'
import { TicketService } from 'services'
import { If, PackageItem, Reviews, TicketSummary } from 'components'
import { isValidHttpUrl } from 'utils'
import MapaImage from 'assets/img/mapa.webp'

type TProps = Readonly<{ params: { id: string } }>

export default async function Ingresso({ params }: TProps) {
  const response = await TicketService.getTicketById(params.id)

  if (response.error || !response.data) {
    return (
      <section className="h-[30rem] px-xs">
        <div className="page-width flex h-full items-center justify-center">
          <p className="text-paragraph-2">Ingresso não encontrado.</p>
        </div>
      </section>
    )
  }

  const ticket = response.data

  return (
    <section className="px-xs">
      <div className="page-width">
        <div className="flex gap-4 py-8">
          <Link href="/">
            <ArrowBackIcon className="size-6" />
          </Link>
          <div>
            <h1 className="mb-1 text-heading-2">{ticket.name}</h1>
            <div className="flex items-center gap-2">
              <PinIcon className="size-6 text-brand-color-blue" />
              <p className="text-support-05">{ticket.location}</p>
            </div>
          </div>
        </div>

        <div className="flex h-[43.4rem] items-center overflow-clip bg-gray-10">
          <If condition={isValidHttpUrl(ticket.image)}>
            <Image
              src={ticket.image}
              alt="Ilustração do Tour"
              width={1320}
              height={434}
              className="object-cover"
            />
          </If>
        </div>

        <div className="flex items-start gap-9 pb-16 pt-9">
          <div className="flex flex-1 flex-col gap-6">
            <Reviews rating={ticket.rating} />

            <div className="flex items-center gap-3.5">
              <PackageItem title="Passagem Aérea" icon={AirlineTicketIcon} />
              <PackageItem title="Wi-fi" icon={WifiIcon} />
              <PackageItem title="Café da manhã" icon={CoffeeCupIcon} />
              <PackageItem title="Quarto" icon={HomeHouseIcon} />
            </div>

            <div className="mt-3">
              <h1 className="mb-2 text-heading-3">Sobre o Ingresso selecionado:</h1>
              <p className="text-paragraph-2 text-gray-40">{ticket.description}</p>
            </div>

            <div>
              <h1 className="mb-2 text-heading-3">Localização</h1>
              <Image
                src={MapaImage}
                alt="Mapa com a localização do tour"
                width={900}
                height={340}
                className="w-full"
              />
            </div>
          </div>

          <TicketSummary ticket={ticket} />
        </div>
      </div>
    </section>
  )
}
