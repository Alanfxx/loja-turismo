type TProps = Readonly<React.ComponentProps<'label'>>

export default function PriceFilterItem(props: TProps) {
  return (
    <label
      className="min-w-[14.7rem] cursor-pointer select-none rounded-sm border border-gray-20
        p-2 text-paragraph-3 text-gray-20 transition-colors hover:text-gray-50
        has-[input:checked]:bg-brand-color-blue has-[input:checked]:text-gray-00"
    >
      <input type="radio" name="PriceFilterItem" className="hidden" />
      <span>{props.children}</span>
    </label>
  )
}
