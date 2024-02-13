import TitleFilter from './TitleFilter'
import ReviewScoreItem from './ReviewScoreItem'

export default function ReviewScoreFilter() {
  return (
    <div className="flex flex-col gap-3">
      <TitleFilter title="Review Score" />

      <div className="flex flex-col gap-3">
        <ReviewScoreItem score={9} label="Excelente (543)" />
        <ReviewScoreItem score={8} label="Muito bom (543)" />
        <ReviewScoreItem score={7} label="Bom (543)" />
        <ReviewScoreItem score={6} label="Ruim (543)" />
        <ReviewScoreItem score={1} label="Péssimo (14)" />
      </div>
    </div>
  )
}
