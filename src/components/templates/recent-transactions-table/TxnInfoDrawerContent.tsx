import Icon from "@/components/atoms/Icon"
import { formatAmount } from "@/utils/helpers"
import { FC, Transaction } from "@/utils/types"
import React from "react"
import DrawerItem from "./DrawerItem"
import dayjs from "dayjs"
import Badge from "@/components/atoms/Badge"
import { TXN_STATUS_BADGE_VARIANT_MAP } from "@/utils/constants"
import Button from "@/components/molecules/Button"
import CopyButton from "@/components/molecules/CopyButton"

type Props = {
  transaction: Transaction
  close: () => void
}

const TxnInfoDrawerContent: FC<Props> = ({ close, transaction }) => {
  return (
    <>
      <header className="flex items-center justify-between p-4 sm:p-6 border-b border-brand-sidebar sticky top-0 bg-white">
        <h2 className="text-xl font-semibold text-brand-header">
          Transaction Details
        </h2>
        <button className="leading-none text-brand-close-btn" onClick={close}>
          <Icon name="icon-close" size={24} />
        </button>
      </header>
      <div className="px-4 sm:px-6 py-6 pb-10 sm:py-10">
        <h1 className="text-[32px] font-bold text-brand-header pb-10">
          {formatAmount(transaction.amount)}
        </h1>
        <section className="border-b border-neutral-badge-border pb-6 grid grid-cols-2 gap-6">
          <DrawerItem
            title="DATE & TIME"
            value={dayjs(transaction.date).format("MMM DD, YYYY. hh:mm A")}
            classNames={{ root: "col-span-full" }}
          />
          <DrawerItem
            title="TRANSACTION TYPE"
            value={transaction.type}
            classNames={{ value: "capitalize" }}
          />
          <DrawerItem title="recipient" value={transaction.recipient} />
          <DrawerItem
            title="TRANSACTION ID"
            value={
              <>
                <span>{transaction.transactionId}</span>
                <CopyButton
                  text={transaction.transactionId}
                  className="leading-none text-brand-primary"
                >
                  <Icon name="icon-copy" size={16} />
                </CopyButton>
              </>
            }
            classNames={{
              root: "col-span-full",
              value: "flex items-center gap-2",
            }}
          />
        </section>
        <section className="pt-6 grid grid-cols-2 gap-6">
          <DrawerItem
            title="amount tendered"
            value={`${transaction.amountTendered} CAD`}
            classNames={{ root: "col-span-full" }}
          />
          <DrawerItem
            title="Total fees"
            value={`${transaction.fees} CAD`}
            classNames={{ value: "capitalize" }}
          />
          <DrawerItem
            title="Amount recieved"
            value={`${transaction.amountRecieved} USD`}
          />
          <DrawerItem title="Description" value={transaction.description} />
          <DrawerItem
            title="Status"
            value={
              <Badge
                variant={TXN_STATUS_BADGE_VARIANT_MAP[transaction.status]}
                className="capitalize"
              >
                {transaction.status}
              </Badge>
            }
          />
        </section>
        <footer className="grid gap-2 pt-20">
          <Button className="p-4">Download Reciept</Button>
          <Button className="p-4" variant="secondary">
            Report Transaction
          </Button>
        </footer>
      </div>
    </>
  )
}

export default TxnInfoDrawerContent
