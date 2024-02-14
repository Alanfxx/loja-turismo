import { twMerge } from 'tailwind-merge'

type TProps = Readonly<React.ComponentProps<'button'>>

export default function Button(props: TProps) {
  return (
    <button
      {...props}
      className={twMerge(
        `flex items-center justify-center gap-2 rounded-sm bg-brand-color-blue px-6
        py-2 text-gray-00 transition-colors hover:bg-brand-color-blue/80`,
        props.className,
      )}
    >
      {props.children}
    </button>
  )
}
