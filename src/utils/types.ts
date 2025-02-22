import { HTMLProps, PropsWithChildren, ReactElement, ReactNode } from "react"
import { ASSET_CLASSES } from "./constants"

export type TWClassNames = HTMLProps<HTMLElement>["className"]

export type FC<PropsType = unknown> = {
  (
    props: { className?: TWClassNames } & PropsWithChildren<PropsType>, // These line automatically add `className` and `children` to all component using the `FC` type
    context?: unknown
  ): ReactElement | null
  displayName?: string
}

export type TableColumn<T = unknown> = {
  id: string | number
  title: ReactNode
  align?: "left" | "center" | "right" | "char" | "justify"
  render: (row: T) => ReactNode | null
  classNames?: {
    cell?: TWClassNames
    th?: TWClassNames
    td?: TWClassNames
  }
  clickable?: boolean
}
export type AssetClass = (typeof ASSET_CLASSES)[keyof typeof ASSET_CLASSES]

export type AssetType = {
  id: number
  name: AssetClass
  percent: number
  amount: number
  returns: number
  percentReturn: number
  color: string
}

export type TransactionType = "withdrawal" | "transfer"
export type TransactionStatus = "pending" | "approved" | "failed"

export type Transaction = {
  id: number
  transactionId: string
  amount: number
  date: string
  type: TransactionType
  amountTendered: number
  fees: number
  amountRecieved: number
  status: TransactionStatus
  description: string
}
