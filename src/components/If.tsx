type TProps = Readonly<{
  children: React.ReactNode
  condition: boolean
}>

export default function If(props: TProps) {
  return <>{props.condition && props.children}</>
}
