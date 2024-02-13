import TitleFilter from './TitleFilter'
import RatingItem from './RatingItem'

export default function RatingFilter() {
  return (
    <div className="flex flex-col gap-3">
      <TitleFilter title="Avaliação" />

      <div className="flex flex-wrap gap-x-1.5 gap-y-4">
        <RatingItem stars={5} value={134} />
        <RatingItem stars={4} value={134} />
        <RatingItem stars={3} value={72} />
        <RatingItem stars={2} value={75} />
        <RatingItem stars={1} value={7} />
      </div>
    </div>
  )
}
