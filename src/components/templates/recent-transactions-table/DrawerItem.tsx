import { cls } from "@/utils/helpers"
import { FC, TWClassNames } from "@/utils/types"
import React, { ReactNode } from "react"

type Slots = "root" | "title" | "value"

type Props = {
  title: string
  value: ReactNode
  classNames?: { [slot in Slots]?: TWClassNames }
}

const DrawerItem: FC<Props> = ({ title, value, classNames }) => {
  return (
    <div className={cls("grid gap-4", classNames?.root)}>
      <span
        className={cls(
          "text-sm font-normal text-brand-close-btn uppercase",
          classNames?.title
        )}
      >
        {title}
      </span>
      <div
        className={cls(
          "text-base font-medium text-brand-header",
          classNames?.value
        )}
      >
        {value}
      </div>
    </div>
  )
}

export default DrawerItem
