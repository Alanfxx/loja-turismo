import { useCartStore } from 'store'
import { numberToBrl } from 'utils'
import Button from './Button'
import Divider from './Divider'
import TicketCartItem from './TicketCartItem'

export default function CartPopup() {
  const tickets = useCartStore(state => state.tickets)

  const total = tickets.reduce((sum, item) => {
    if (item.price.discount) {
      return (sum += item.quantidade * item.price.discount)
    }
    return sum
  }, 0)

  return (
    <div
      className="absolute right-0 top-[160%] z-20 flex
        w-[49.4rem] flex-col gap-4 bg-gray-00 p-6 drop-shadow-lg"
    >
      <div>
        <h1 className="mb-2 text-base font-bold">Ingressos</h1>
        <div className="flex max-h-[38rem] flex-col gap-5 overflow-y-auto">
          {tickets.map(t => (
            <TicketCartItem ticket={t} key={t.id} />
          ))}
        </div>
      </div>
      <Divider />

      <div className="flex flex-col gap-2">
        <p className="flex justify-between text-paragraph-2 text-gray-40">
          <span>Ingressos</span>
          <span>R$ {numberToBrl(total)}</span>
        </p>
        <p className="flex justify-between text-paragraph-22">
          <span>Subtotal</span>
          <span>R$ {numberToBrl(total)}</span>
        </p>
        <div className="flex justify-between text-paragraph-2 text-gray-40">
          <p>
            1x de R$ 1.365,79 com desconto de <span className="text-support-02">(7%)</span>
          </p>
          <span className="text-paragraph-22 text-support-02">-R$ 102,80</span>
        </div>
        <p className="flex justify-between text-paragraph-2 text-gray-40">
          <span>10x Sem juros de R$ 1.468,60</span>
          <span>R$ 1.468,60</span>
        </p>
      </div>
      <Divider />

      <p className="flex items-center justify-between">
        <span className="text-paragraph-22">Subtotal</span>
        <span className="text-2xl text-brand-color-blue">R$ {numberToBrl(total)}</span>
      </p>

      <Button className="rounded-md bg-primary py-3 hover:bg-primary/80">
        Ir para o check out
      </Button>
    </div>
  )
}
