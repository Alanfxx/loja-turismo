import { LogoIcon, MessageQuestionIcon, ShopIcon, UserIcon } from 'icons'
import Image from 'next/image'
import BrFlag from 'assets/img/br-flag.png'

export default function Header() {
  return (
    <header className="border-b-gray-10 px-xs bg-gray-00 h-[10rem] w-full border">
      <div className="page-width flex h-full items-center justify-between">
        <LogoIcon className="h-[2.95rem] w-[13.56rem]" />

        <div className="flex h-[5rem] items-center gap-4">
          <p className="text-paragraph-4 text-support-05">Cotação dólar hoje: R$5,53</p>
          <Image src={BrFlag} alt="Bandeira do Brasil" />
          <MessageQuestionIcon className="text-brand-color-blue size-6" />
          <div className="bg-gray-10 h-[2.9rem] w-px"></div>

          <button className="text-brand-color-blue flex items-center gap-1">
            <UserIcon className="size-6" />
            <span className="text-paragraph-22">Entrar</span>
          </button>

          <button className="bg-primary text-gray-00 flex h-full items-center gap-1.5 rounded px-3 py-1.5">
            <ShopIcon className="size-9" />
            <span className="text-paragraph-1 bg-gray-00/10 rounded-full px-2">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}
