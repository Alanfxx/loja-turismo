import { BuildingIcon, HouseIcon, RiseBuildingIcon } from 'icons'
import TitleFilter from './TitleFilter'
import TipoPropriedadeItem from './TipoPropriedadeItem'

export default function TipoPropriedadeFilter() {
  return (
    <div className="flex flex-col gap-3">
      <TitleFilter title="Tipo de Propriedade" />

      <div className="flex flex-col gap-2">
        <TipoPropriedadeItem type="Casa (346)" icon={HouseIcon} />
        <TipoPropriedadeItem type="Apartamento (234)" icon={BuildingIcon} />
        <TipoPropriedadeItem type="Hotel (23)" icon={RiseBuildingIcon} />
      </div>
    </div>
  )
}
