"use client"

import { ASSETS } from "@/utils/dummy"
import { formatAmount } from "@/utils/helpers"
import { FC } from "@/utils/types"
import React, { useEffect, useMemo, useState } from "react"
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts"

const PortfolioBreakdownChart: FC = () => {
  const [mounted, setMounted] = useState(false)

  const data = useMemo(
    () =>
      ASSETS.map((asset) => ({
        name: asset.name,
        value: asset.amount,
        color: asset.color,
      })),
    []
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return !mounted ? null : (
    <section className="sm:bg-brand-sidebar rounded-x20 w-[400px] max-w-full flex justify-center items-center">
      <div className="relative w-fit">
        <div className="relative z-[1]">
          <PieChart height={250} width={275}>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={450}
              innerRadius={60}
              outerRadius={100}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              height={40}
              content={(props) => {
                return (
                  <section className="flex items-center justify-center gap-4 pt-5">
                    {props.payload?.map((item, idx) => (
                      <div
                        className="flex items-center gap-2 text-sm font-medium cursor-pointer text-brand-close-btn"
                        key={idx}
                      >
                        <span
                          className="size-1.5 min-h-1.5 min-w-1.5 rounded-full"
                          style={{ background: item.color }}
                        />
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </section>
                )
              }}
            />
          </PieChart>
        </div>
        <div className="z-0 absolute top-0 left-0 w-full h-[210px] flex flex-col items-center justify-center">
          <span className="text-sm font-medium text-brand-close-btn">
            Assets
          </span>
          <span className="text-brand-page-title font-semibold">
            {formatAmount(100000)}
          </span>
        </div>
      </div>
    </section>
  )
}

export default PortfolioBreakdownChart
