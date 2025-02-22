"use client"

import { cls } from "@/utils/helpers"
import { FC } from "@/utils/types"
import React, { ThHTMLAttributes } from "react"

export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>
const TableHeadCell: FC<TableHeadProps> = ({
  children,
  className,
  align = "left",
  ...props
}) => {
  return (
    <th
      align={align}
      className={cls(
        "text-brand-header text-sm font-medium p-4 border-b border-brand-sidebar",
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}

export default TableHeadCell
