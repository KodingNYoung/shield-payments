import { cls } from "@/utils/helpers"
import { IconNames } from "@/utils/iconNames"
import { FC } from "@/utils/types"

import { HTMLProps } from "react"

export type IconProps = HTMLProps<HTMLSpanElement> & {
  name: IconNames
  size?: number | string
}

const Icon: FC<IconProps> = ({
  className,
  name,
  style,
  size = 14,
  ...props
}) => {
  return (
    <span
      style={{
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined,
        ...style,
      }}
      className={cls("text-inherit", name, className)}
      {...props}
    />
  )
}

export default Icon
