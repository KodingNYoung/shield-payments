import Icon from "@/components/atoms/Icon"
import Button from "@/components/molecules/Button"
import { formatAmount } from "@/utils/helpers"
import { FC } from "@/utils/types"
import React, { ReactNode } from "react"

type Props = {
  title: string
  amount: number
  subtitle: ReactNode
  primaryAction: { label: string; action: () => void }
  secondaryAction: { label: string; action: () => void }
}

const BalanceCard: FC<Props> = ({
  title,
  amount,
  subtitle,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <div className="grid gap-4 min-w-[350px] p-6 sm:p-0 bg-brand-border sm:bg-transparent rounded-x20">
      <header className="flex items-center gap-6 text-brand-close-btn">
        <h4 className="font-medium">{title}</h4>
        <button className="!leading-none">
          <Icon name="icon-eye" className="" />
        </button>
      </header>
      <main className="flex items-center gap-6">
        <h2 className="text-[28px] font-bold text-brand-header">
          {formatAmount(amount)}
        </h2>
        {subtitle}
      </main>
      <footer className="flex items-center gap-2">
        <Button
          onClick={primaryAction.action}
          className="w-1/2 py-2.5 sm:min-w-[180px]"
        >
          {primaryAction.label}
        </Button>
        <Button
          variant="secondary"
          onClick={secondaryAction.action}
          className="w-1/2 py-2.5 sm:min-w-[180px] bg-white sm:bg-brand-sidebar"
        >
          {secondaryAction.label}
        </Button>
      </footer>
    </div>
  )
}

export default BalanceCard
