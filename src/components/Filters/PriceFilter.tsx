import PriceItem from './PriceItem'
import TitleFilter from './TitleFilter'

export default function PriceFilter() {
  return (
    <div className="flex flex-col gap-3">
      <TitleFilter title="Preço" />

      <div className="flex flex-wrap gap-x-1.5 gap-y-2">
        <PriceItem>R$ 10,00 - R$ 390,00</PriceItem>
        <PriceItem>R$ 10,00 - R$ 390,00</PriceItem>
        <PriceItem>R$ 10,00 - R$ 390,00</PriceItem>
        <PriceItem>R$ 10,00 - R$ 390,00</PriceItem>
      </div>
    </div>
  )
}
