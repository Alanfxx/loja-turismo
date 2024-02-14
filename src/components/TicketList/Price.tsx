import { TPrice } from 'types'
import { numberToBrl } from 'utils'

export default function Price(props: Readonly<{ price: TPrice }>) {
  if (!props.price.discount) return <p>Sem preço</p>

  return (
    <div>
      <p className="text-gray-50">
        de R$ {numberToBrl(props.price.full)} <span className="text-paragraph-4">por</span>
      </p>
      <p className="flex items-start">
        <span>R$</span>
        <span className="ms-1 text-heading-2 text-brand-color-blue">
          {numberToBrl(props.price.discount)}
        </span>
      </p>
    </div>
  )
}
