"use client"

import Badge from "@/components/atoms/Badge"
import Icon from "@/components/atoms/Icon"
import Table from "@/components/organisms/table"
import { FC, TableColumn, Transaction } from "@/utils/types"
import dayjs from "dayjs"
import React, { useState } from "react"
import TxnInfoDrawer from "./TxnInfoDrawer"
import { TXN_STATUS_BADGE_VARIANT_MAP } from "@/utils/constants"

const columns: TableColumn<Transaction>[] = [
  {
    id: 1,
    title: "Date & Time",
    render: (row) => (
      <div className="grid">
        <span className="block sm:hidden text-sm font-medium">
          {row.description}
        </span>
        <p className="text-brand-close-btn">
          {dayjs(row.date).format("MMM DD, YYYY")} at{" "}
          {dayjs(row.date).format("hh:mm a")}
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Amount",
    render: (row) => (
      <div className="grid justify-items-end sm:justify-items-start gap-2">
        <span className="group-hover/tr:text-brand-header">
          {row.amountTendered} CAD
        </span>
        <Badge
          variant={TXN_STATUS_BADGE_VARIANT_MAP[row.status]}
          className="block sm:hidden capitalize"
        >
          {row.status}
        </Badge>
      </div>
    ),
  },
  {
    id: 3,
    title: "Type",
    classNames: {
      cell: "hidden sm:table-cell",
      td: "capitalize group-hover/tr:text-brand-header",
    },
    render: (row) => row.type,
  },
  {
    id: 4,
    title: "Description",
    classNames: {
      cell: "hidden sm:table-cell group-hover/tr:text-brand-header",
    },
    render: (row) => row.description,
  },
  {
    id: 5,
    title: "Status",
    classNames: { cell: "hidden sm:table-cell" },
    render: (row) => (
      <Badge
        variant={TXN_STATUS_BADGE_VARIANT_MAP[row.status]}
        className="capitalize"
      >
        {row.status}
      </Badge>
    ),
  },
  {
    id: 6,
    title: "",
    classNames: { cell: "hidden sm:table-cell" },
    render: () => (
      <Icon name="icon-more" size={24} className="text-[#9ca3af]" />
    ),
  },
]

type Props = {
  transactions: Transaction[]
}

const RecentTransactions: FC<Props> = ({ transactions }) => {
  const [drawerData, setDrawerData] = useState<Transaction>()
  return (
    <section className="flex flex-col gap-6 px-4 sm:px-0">
      <header>
        <h2 className="text-xl sm:text-2xl font-medium text-brand-header">
          Recent Transactions
        </h2>
      </header>
      <Table
        columns={columns}
        data={transactions}
        classNames={{
          tbr: "cursor-pointer hover:bg-brand-sidebar transition-colors",
          td: "px-0 sm:px-4",
        }}
        onRowClick={(row) => setDrawerData(row)}
      />
      <TxnInfoDrawer
        isOpen={Boolean(drawerData)}
        close={() => setDrawerData(undefined)}
        transaction={drawerData}
      />
    </section>
  )
}

export default RecentTransactions
