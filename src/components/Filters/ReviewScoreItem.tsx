import { If } from 'components'

export default function ReviewScoreItem(props: { score: number; label: string }) {
  const scorePercent = (props.score / 10) * 100

  return (
    <div className="flex items-center gap-xxs">
      <div className="bg-gray-15 relative flex h-[3rem] w-[18.9rem] items-center">
        <If condition={props.score > 1}>
          <span className="z-10 ps-2 text-gray-00">{props.score}+</span>
        </If>

        <div
          className="absolute left-0 h-full bg-support-03"
          style={{ width: `${scorePercent}%` }}
        ></div>
      </div>
      <span className="text-gray-70">{props.label}</span>
    </div>
  )
}
