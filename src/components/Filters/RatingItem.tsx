import { StarIcon } from 'icons'

export default function RatingItem(props: { stars: number; value: number }) {
  return (
    <button className="flex items-center gap-2 border p-1 hover:border-gray-30">
      <div className="flex text-support-03">
        {Array(props.stars)
          .fill(0)
          .map(() => (
            <StarIcon className="size-6" />
          ))}
      </div>

      <span className="text-gray-30">({props.value})</span>
    </button>
  )
}
