import { TSVG } from 'types'

export default function TipoPropriedadeItem(props: { type: string; icon: TSVG }) {
  const Icon = props.icon

  return (
    <label
      className="flex min-w-[14.7rem] cursor-pointer select-none items-center gap-xxs rounded-sm border border-gray-20
        p-2 text-paragraph-3 text-gray-20 transition-colors hover:text-gray-40
       has-[input:checked]:border-brand-color-blue has-[input:checked]:text-brand-color-blue"
    >
      <input type="radio" name="TipoPropriedadeItem" className="hidden" />
      <Icon className="size-5" />
      <span>{props.type}</span>
    </label>
  )
}
