import { ROUTES } from "@/utils/constants"
import { IconNames } from "@/utils/iconNames"
import React from "react"
import dynamic from "next/dynamic"

type Route = {
  icon: IconNames
  label: string
  link: string
  id: number
}

const SIDEBAR_ROUTES: Route[] = [
  {
    icon: "icon-category",
    label: "Dashboard",
    link: ROUTES.DASHBOARD,
    id: 1,
  },
  {
    icon: "icon-wallet-2",
    label: "Wallet",
    link: ROUTES.WALLET,
    id: 2,
  },
  {
    icon: "icon-coin",
    label: "Pay",
    link: ROUTES.PAY,
    id: 3,
  },
  {
    icon: "icon-money-add",
    label: "Earn",
    link: ROUTES.EARN,
    id: 4,
  },
]

const NavItem = dynamic(() => import("./NavItem"), { ssr: false })

const SidebarNav = () => {
  return (
    <nav className="flex-1 flex flex-col gap-1 pt-8 sm:pt-16">
      {SIDEBAR_ROUTES.map(({ id, ...route }) => (
        <NavItem {...route} key={id} />
      ))}
      <span className="flex-1" />
      <NavItem icon="icon-setting-2" label="Settings" link={ROUTES.SETTING} />
    </nav>
  )
}

export default SidebarNav
