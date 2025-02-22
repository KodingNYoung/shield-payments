import { TableColumn, TWClassNames } from "@/utils/types"
import React from "react"
import TableHeadCell from "./TableHeadCell"
import { cls } from "@/utils/helpers"
import TableRow from "./TableRow"

type Slots = "root" | "table" | "thead" | "thr" | "th" | "tbody" | "tbr" | "td"

type Props<T> = {
  columns: TableColumn<T>[]
  data: T[]
  onRowClick?: (row: unknown) => void
  classNames?: { [slot in Slots]?: TWClassNames }
}

const Table = <T = "unknown",>({
  columns,
  data,
  classNames,
  onRowClick,
}: Props<T>) => {
  return (
    <section
      className={cls(
        "overflow-x-auto overflow-visible w-full custom-scrollbar",
        classNames?.root
      )}
    >
      <table
        className={cls(
          "group/table rounded-[inherit] w-full",
          classNames?.table
        )}
      >
        <thead
          className={cls("hidden sm:table-header-group", classNames?.thead)}
        >
          <tr className={cls("py-3 sm:px-6 group/tr", classNames?.thr)}>
            {columns.map(({ title, id, classNames: classes, align }) => {
              return (
                <TableHeadCell
                  key={id}
                  className={cls(
                    "whitespace-nowrap",
                    classNames?.th,
                    classes?.cell,
                    classes?.th
                  )}
                  align={align}
                >
                  {title}
                </TableHeadCell>
              )
            })}
          </tr>
        </thead>
        <tbody className={cls(classNames?.tbody)}>
          {data.map((row, idx) => (
            <TableRow
              key={`table-row-${idx}`}
              row={row}
              onClick={onRowClick}
              columns={columns}
              classNames={classNames}
              idx={idx}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Table
