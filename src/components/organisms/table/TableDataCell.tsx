import { cls } from "@/utils/helpers"
import { FC } from "@/utils/types"
import React, { TdHTMLAttributes } from "react"

type Props = TdHTMLAttributes<HTMLTableCellElement> & {
  clickable?: boolean
}

const TableDataCell: FC<Props> = ({
  children,
  className,
  clickable,
  align = "left",
  ...props
}) => {
  return (
    <td
      className={cls(
        "border-b border-brand-sidebar p-4 text-sm text-brand-table-data font-medium",
        className
      )}
      onClick={(e) => {
        if (clickable) e.stopPropagation()
      }}
      align={align}
      {...props}
    >
      {children}
    </td>
  )
}

export default TableDataCell
