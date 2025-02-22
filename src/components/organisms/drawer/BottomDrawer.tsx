import React from "react"
import { FC, TWClassNames } from "@/utils/types"
import dynamic from "next/dynamic"
import { DrawerSlots } from "@/components/organisms/drawer"
import { cls } from "@/utils/helpers"

const Drawer = dynamic(() => import("@/components/organisms/drawer"), {
  ssr: false,
})

type Props = {
  isOpen: boolean
  close: () => void
  classNames?: { [slot in DrawerSlots]?: TWClassNames }
}

const BottomDrawer: FC<Props> = ({ children, classNames, ...props }) => {
  return (
    <Drawer
      {...props}
      classNames={{
        ...classNames,
        drawer: cls(
          "p-0 right-[unset] w-full max-h-[80vh] -bottom-1",
          classNames?.drawer
        ),
        content: cls("rounded-b-none overflow-y-auto", classNames?.content),
      }}
      motionProps={{ initial: { y: 50 }, animate: { y: 0 }, exit: { y: 50 } }}
    >
      {children}
    </Drawer>
  )
}

export default BottomDrawer
