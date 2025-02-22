"use client"

import Icon from "@/components/atoms/Icon"
import Button from "@/components/molecules/Button"
import { formatAmount } from "@/utils/helpers"
import { FC } from "@/utils/types"
import React, { ReactNode, useState } from "react"

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
  const [hideBalance, setHideBalance] = useState(false)

  return (
    <div className="grid gap-4 min-w-[350px] p-6 sm:p-0 bg-brand-border sm:bg-transparent rounded-x20">
      <header className="flex items-center gap-6 text-brand-close-btn">
        <h4 className="font-medium">{title}</h4>
        <button
          className="!leading-none"
          onClick={() => setHideBalance((curr) => !curr)}
        >
          <Icon name={hideBalance ? "icon-eye-off" : "icon-eye"} className="" />
        </button>
      </header>
      <main className="flex items-center gap-6">
        <h2 className="text-[28px] font-bold text-brand-header">
          {hideBalance ? "*******" : formatAmount(amount)}
        </h2>
        <span className="flex items-center gap-1 text-sm text-success-text">
          {hideBalance ? "*****" : subtitle}
        </span>
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
