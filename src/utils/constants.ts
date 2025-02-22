import { BadgeVariant } from "@/components/atoms/Badge"
import { TransactionStatus } from "./types"

export const ROUTES = {
  DASHBOARD: "/",
  WALLET: "/wallet",
  PAY: "/pay",
  EARN: "/earn",
  SETTING: "/setting",
}

export const CURRENCY = "C$"

export const ASSET_CLASSES = {
  CASH: "Cash",
  CRYPTO: "Crypto",
  STOCKS: "Stocks",
  BONDS: "Bonds",
} as const

export const TXN_STATUS_BADGE_VARIANT_MAP: {
  [status in TransactionStatus]: BadgeVariant
} = {
  pending: "default",
  approved: "success",
  failed: "error",
} as const
