import { TSVG } from 'types'

export default function PackageItem(props: Readonly<{ icon: TSVG; title: string }>) {
  return (
    <div className="flex items-center gap-2 text-gray-40">
      <props.icon className="size-[1.8rem]"></props.icon>
      <p className="truncate">{props.title}</p>
    </div>
  )
}
