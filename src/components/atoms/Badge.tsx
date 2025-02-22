import { cls } from "@/utils/helpers"
import { FC, TWClassNames } from "@/utils/types"
import React from "react"

export type BadgeVariant = "default" | "error" | "success"
type Props = {
  variant: BadgeVariant
}

const badgeVariants: { [variant in BadgeVariant]: TWClassNames } = {
  default: "text-neutral-badge bg-brand-sidebar border-neutral-badge-border",
  error: "text-error-badge bg-error-badge-bg border-error-badge-border",
  success: "text-success-badge bg-success-badge-bg border-success-badge-border",
}

const Badge: FC<Props> = ({ children, variant, className }) => {
  return (
    <div
      className={cls(
        "border text-sm font-medium rounded-full px-2 py-0.5 w-fit",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </div>
  )
}

export default Badge
