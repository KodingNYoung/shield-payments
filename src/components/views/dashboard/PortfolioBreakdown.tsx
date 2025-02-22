import Icon from "@/components/atoms/Icon"
import { FC } from "@/utils/types"
import Link from "next/link"
import React from "react"
import PortfolioBreakdownTable from "./_components/PortfolioBreakdownTable"
import PortfolioBreakdownChart from "./_components/PortfolioBreakdownChart"

const PortfolioBreakdown: FC = () => {
  return (
    <section className="flex flex-col gap-6 px-4 sm:px-0">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-brand-header">
          Portfolio Breakdown
        </h2>
        <Link
          href=""
          className="flex items-center gap-2 text-base font-medium text-brand-primary"
        >
          <span>Explore</span>
          <Icon name="icon-arrow-right" size={16} />
        </Link>
      </header>
      <main className="flex flex-wrap justify-center gap-6">
        <PortfolioBreakdownChart />
        <PortfolioBreakdownTable />
      </main>
    </section>
  )
}

export default PortfolioBreakdown
