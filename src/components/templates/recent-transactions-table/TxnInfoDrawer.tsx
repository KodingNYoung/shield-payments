import BottomDrawer from "@/components/organisms/drawer/BottomDrawer"
import { FC, Transaction } from "@/utils/types"
import dynamic from "next/dynamic"
import React from "react"
import TxnInfoDrawerContent from "./TxnInfoDrawerContent"

const Drawer = dynamic(() => import("@/components/organisms/drawer"), {
  ssr: false,
})

type Props = { isOpen: boolean; close: () => void; transaction?: Transaction }

const TxnInfoDrawer: FC<Props> = ({
  transaction = {} as Transaction,
  ...props
}) => {
  return (
    <>
      <Drawer
        {...props}
        classNames={{
          root: "hidden sm:flex",
          content: "min-w-[500px] overflow-y-auto",
        }}
      >
        <TxnInfoDrawerContent close={props.close} transaction={transaction} />
      </Drawer>
      <BottomDrawer {...props} classNames={{ root: "sm:hidden" }}>
        <TxnInfoDrawerContent close={props.close} transaction={transaction} />
      </BottomDrawer>
    </>
  )
}

export default TxnInfoDrawer
