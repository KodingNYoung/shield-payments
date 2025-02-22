"use client"
import { cls } from "@/utils/helpers"
import { TableColumn, TWClassNames } from "@/utils/types"
import React from "react"
import TableDataCell from "./TableDataCell"

type Slots = "tbr" | "td"

type Props<T> = {
  idx: number
  columns: TableColumn<T>[]
  onClick?: (row: T) => void
  row: T
  classNames?: { [slot in Slots]?: TWClassNames }
}

const TableRow = <T,>({ idx, onClick, columns, row, classNames }: Props<T>) => {
  return (
    <tr
      className={cls(
        "py-3 sm:px-6 group/tr w-full",
        onClick && "cursor-pointer",
        classNames?.tbr
      )}
      onClick={() => onClick && onClick(row)}
    >
      {columns.map(({ id, render, align, classNames: classes, clickable }) => (
        <TableDataCell
          key={`table-row-${idx}-col-${id}`}
          align={align}
          className={cls(classNames?.td, classes?.cell, classes?.td)}
          clickable={clickable}
        >
          {render(row)}
        </TableDataCell>
      ))}
    </tr>
  )
}

export default TableRow
