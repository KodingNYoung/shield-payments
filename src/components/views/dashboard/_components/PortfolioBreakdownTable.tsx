import Table from "@/components/organisms/table"
import { formatAmount, formatWithSeparator } from "@/utils/helpers"
import { AssetType, FC, TableColumn } from "@/utils/types"
import React from "react"
import AssetTag from "./AssetTag"
import { ASSETS } from "@/utils/dummy"
import Icon from "@/components/atoms/Icon"

const columns: TableColumn<AssetType>[] = [
  {
    id: 1,
    title: "Asset Class",
    render: (row) => (
      <div className="flex items-center gap-2">
        <AssetTag type={row.name} color={row.color} />
        <div className="flex sm:hidden items-center justify-start text-success-text text-xs font-normal gap-0.5">
          <Icon
            name="icon-arrow-right"
            className="-rotate-45 block"
            size={12}
          />
          <span>{formatWithSeparator(row.percentReturn)}%</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "% of Assets",
    classNames: {
      td: "text-right sm:text-left !text-brand-close-btn sm:text-brand-table-data font-normal sm:font-medium",
    },
    render: (row) => `${row.percent}%`,
  },
  {
    id: 3,
    title: "Value",
    classNames: {
      td: "text-right sm:text-left !text-base sm:text-sm text-brand-page-title sm:text-brand-table-data",
    },
    render: (row) => `${formatAmount(row.amount)}`,
  },
  {
    id: 4,
    title: "Return",
    classNames: { cell: "hidden sm:table-cell" },
    render: (row) => (
      <div className="flex items-center justify-start text-success-text text-sm font-normal gap-0.5">
        <Icon name="icon-arrow-right" className="-rotate-45 block" size={16} />{" "}
        <span>
          {formatAmount(row.returns, true)} (
          {formatWithSeparator(row.percentReturn)}%)
        </span>
      </div>
    ),
  },
  {
    id: 5,
    title: "",
    classNames: { cell: "hidden sm:table-cell" },
    render: () => (
      <Icon name="icon-chevron-up" size={20} className="text-[#D1D5DB]" />
    ),
  },
]

const PortfolioBreakdownTable: FC = () => {
  return (
    <div className="flex-1">
      <Table
        columns={columns}
        data={ASSETS}
        classNames={{
          td: "border-b-0 sm:border-b px-0 sm:px-4",
        }}
      />
    </div>
  )
}

export default PortfolioBreakdownTable
