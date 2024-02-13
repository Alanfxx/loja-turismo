import { CheckBox } from 'components'
import TitleFilter from './TitleFilter'

export default function ComodidadesFilter() {
  return (
    <div className="flex flex-col gap-3">
      <TitleFilter title="Comodidades" />

      <div className="flex flex-col gap-3">
        <CheckBox>Wi-Fi</CheckBox>
        <CheckBox>Cozinha</CheckBox>
        <CheckBox>Máquina de Lavar</CheckBox>
        <CheckBox>Ar-condicionado</CheckBox>
        <CheckBox>Secadora</CheckBox>
      </div>
    </div>
  )
}
