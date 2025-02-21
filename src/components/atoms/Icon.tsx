import { cls } from "@/utils/helpers"
import { IconNames } from "@/utils/iconNames"
import { FC } from "@/utils/types"

import { HTMLProps } from "react"

export type IconProps = HTMLProps<HTMLSpanElement> & {
  name: IconNames
  size?: number | string
}

const Icon: FC<IconProps> = ({ className, name, size, ...props }) => {
  return (
    <span
      style={{
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
      }}
      className={cls(
        "text-inherit text-regular-sm !leading-none",
        name,
        className
      )}
      {...props}
    />
  )
}

export default Icon
