import ComodidadesFilter from './ComodidadesFilter'
import Divider from './Divider'
import PriceFilter from './PriceFilter'
import RatingFilter from './RatingFilter'
import ReviewScoreFilter from './ReviewScoreFilter'
import TipoPropriedadeFilter from './TipoPropriedadeFilter'

export default function Filters() {
  return (
    <div className="flex w-[36.7rem] flex-col gap-6 bg-gray-00 p-6 shadow-s">
      <div className="flex justify-between border-b pb-3">
        <span className="text-heading-2">Filtro</span>
        <button className="text-paragraph-3 text-support-06">Limpar todos os filtros</button>
      </div>

      <PriceFilter />
      <Divider />

      <RatingFilter />
      <Divider />

      <ComodidadesFilter />
      <Divider />

      <TipoPropriedadeFilter />
      <Divider />

      <ReviewScoreFilter />
    </div>
  )
}
