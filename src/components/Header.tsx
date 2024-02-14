import { LogoIcon, MessageQuestionIcon, ShopIcon, UserIcon } from 'icons'
import Image from 'next/image'
import BrFlag from 'assets/img/br-flag.png'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="h-[10rem] w-full border-[0.08rem] border-b-gray-10 bg-gray-00 px-xxs lg:px-xs">
      <div className="page-width flex h-full items-center justify-between">
        <Link href="/">
          <LogoIcon className="h-[2.95rem] w-[13.56rem]" />
        </Link>

        <div className="flex h-[5rem] items-center gap-4">
          <div className="flex items-center gap-4 max-lg:hidden">
            <p className="text-paragraph-4 text-support-05">Cotação dólar hoje: R$5,53</p>
            <Image src={BrFlag} alt="Bandeira do Brasil" />
            <MessageQuestionIcon className="size-6 text-brand-color-blue" />
            <div className="h-[2.9rem] w-px bg-gray-10"></div>
          </div>

          <button className="flex items-center gap-1 text-brand-color-blue">
            <UserIcon className="size-6" />
            <span className="text-paragraph-22">Entrar</span>
          </button>

          <button className="flex h-full items-center gap-1.5 rounded bg-primary px-3 py-1.5 text-gray-00 hover:bg-primary/80">
            <ShopIcon className="size-9" />
            <span className="rounded-full bg-gray-00/10 px-2 text-paragraph-1">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}
