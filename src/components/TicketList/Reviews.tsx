import { TRating } from 'types'
import { getReviewByRating } from 'utils'

export default function Reviews({ rating }: Readonly<{ rating: TRating }>) {
  if (!rating.value) return <p className="mt-8">Nenhum review</p>

  return (
    <div className="mt-8 flex items-center gap-2">
      <div className="rounded-sm bg-brand-color-blue p-xxs text-gray-10">{rating.value}</div>
      <span>{getReviewByRating(rating.value)}</span>
      <span className="ms-1 text-gray-40">({rating.reviewsCount} Reviews)</span>
    </div>
  )
}
