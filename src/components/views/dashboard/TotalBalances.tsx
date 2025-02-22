import { FC } from "@/utils/types"
import React from "react"
import BalanceCard from "./_components/BalanceCard"
import { formatAmount, formatWithSeparator } from "@/utils/helpers"
import Icon from "@/components/atoms/Icon"

const TotalBalances: FC = () => {
  return (
    <section className=" sm:border-y border-brand-border grid py-2 sm:px-4  md:px-0 sm:p-0">
      <div className="overflow-x-auto flex gap-4 sm:gap-20 px-4 sm:p-0 sm:py-6">
        <BalanceCard
          title="My Savings"
          amount={0}
          subtitle={
            <>
              {formatAmount(0.03)}
              <span className="text-brand-close-btn">earned</span>
            </>
          }
          primaryAction={{
            label: "Add Money",
            action: () => console.log("Add money"),
          }}
          secondaryAction={{
            label: "Transfer",
            action: () => console.log("Transfer"),
          }}
        />
        <BalanceCard
          title="My portfolio"
          amount={100000}
          subtitle={
            <>
              <Icon
                name="icon-arrow-right"
                size={16}
                className="-rotate-45 block"
              />
              {formatWithSeparator(11)}%
            </>
          }
          primaryAction={{
            label: "Invest",
            action: () => console.log("Invest"),
          }}
          secondaryAction={{
            label: "Withdraw",
            action: () => console.log("Withdraw"),
          }}
        />
      </div>
    </section>
  )
}

export default TotalBalances
