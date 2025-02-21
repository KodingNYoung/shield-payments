import { cls } from "@/utils/helpers"
import { IconNames } from "@/utils/iconNames"
import { FC } from "@/utils/types"
import React, { HTMLProps } from "react"
import Icon, { IconProps } from "../atoms/Icon"

type Props = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "submit" | "reset" | "button"
  icon: IconNames
  iconProps: Omit<IconProps, "name">
}

const IconButton: FC<Props> = ({ icon, iconProps, className, ...props }) => {
  return (
    <button
      className={cls(
        "min-w-8 min-h-8 size-8 sm:min-w-10 sm:mmin-h-10 sm:size-10 border border-brand-sidebar md:border-[#E5E7EB] md:border-opacity-50 rounded-full flex justify-center items-center text-brand-page-title bg-white md:bg-brand-sidebar",
        className
      )}
      {...props}
    >
      <Icon name={icon} {...iconProps} />
    </button>
  )
}

export default IconButton
