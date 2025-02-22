import { FC } from "@/utils/types"
import React from "react"
import TotalBalances from "./TotalBalances"
import PortfolioBreakdown from "./PortfolioBreakdown"
import { TRANSACTIONS } from "@/utils/dummy"
import RecentTransactions from "@/components/templates/recent-transactions-table"

const Dashboard: FC = () => {
  return (
    <main className="sm:p-4 lg:p-10 flex flex-col gap-10">
      <header className="hidden sm:block">
        <h2 className="text-2xl text-medium font-geist text-brand-page-title">
          Overview
        </h2>
      </header>
      <TotalBalances />
      <PortfolioBreakdown />
      <RecentTransactions transactions={TRANSACTIONS.slice(0, 5)} />
    </main>
  )
}

export default Dashboard
