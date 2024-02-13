type TProps = Readonly<React.ComponentProps<'label'>>

export default function CheckBox(props: TProps) {
  return (
    <label className="flex w-max cursor-pointer items-center gap-xxs">
      <input type="checkbox" className="size-5 accent-brand-color-blue" />
      <span>{props.children}</span>
    </label>
  )
}
