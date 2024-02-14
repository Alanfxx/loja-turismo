'use client'
import { ShopIcon } from 'icons'
import { useCartStore } from 'store'

export default function CartButton() {
  const tickets = useCartStore(state => state.tickets)

  return (
    <button className="flex h-full items-center gap-1.5 rounded bg-primary px-3 py-1.5 text-gray-00 hover:bg-primary/80">
      <ShopIcon className="size-9" />
      <span className="rounded-full bg-gray-00/10 px-2 text-paragraph-1">{tickets.length}</span>
    </button>
  )
}
