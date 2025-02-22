import Icon from "@/components/atoms/Icon"
import { cls } from "@/utils/helpers"
import { IconNames } from "@/utils/iconNames"
import { FC } from "@/utils/types"

type Props = {
  label: string
  icon: IconNames
  active: boolean
  onSelect: () => void
}
const DarkModeToggleButton: FC<Props> = ({ label, icon, active, onSelect }) => {
  return (
    <button
      className={cls(
        "w-1/2 flex items-center gap-2 p-2 rounded-x10 relative transition-colors duration-150 font-geist",
        active ? "text-brand-page-title" : "text-brand-navitem"
      )}
      onClick={onSelect}
    >
      <Icon name={icon} size={20} />
      <span>{label}</span>
    </button>
  )
}

export default DarkModeToggleButton
