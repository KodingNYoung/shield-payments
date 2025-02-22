import RecentTransactions from "@/components/templates/RecentTransactions"
import { TRANSACTIONS } from "@/utils/dummy"
import { FC } from "@/utils/types"
import React from "react"
import PayCard, { PayCardProps } from "./_components/PayCard"

const payCardData: (PayCardProps & { id: number })[] = [
  {
    id: 1,
    icon: "icon-money-tick",
    title: "Send money",
    subtitle: "Transfer funds to anyone",
  },
  {
    id: 2,
    icon: "icon-wallet",
    title: "Request money",
    subtitle: "Get paid by another user",
  },
  {
    id: 3,
    icon: "icon-card-pos",
    title: "Shield Card",
    subtitle: "Spend freely anywhere",
  },
  {
    id: 4,
    icon: "icon-receipt-2",
    title: "Pay Bills",
    subtitle: "Manage your bills",
  },
]

const Pay: FC = () => {
  return (
    <main className="p-4 lg:p-10 flex flex-col gap-10">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] max-w-full  gap-4">
        {payCardData.map(({ id, ...data }) => (
          <PayCard key={id} {...data} />
        ))}
      </div>
      <RecentTransactions transactions={TRANSACTIONS} />
    </main>
  )
}

export default Pay
