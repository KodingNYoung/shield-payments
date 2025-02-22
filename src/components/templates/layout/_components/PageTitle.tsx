"use client"

import { ROUTES } from "@/utils/constants"
import { FC } from "@/utils/types"
import { usePathname } from "next/navigation"
import React from "react"

const pathTitleMap = {
  [ROUTES.DASHBOARD]: "Dashboard",
  [ROUTES.WALLET]: "Wallet",
  [ROUTES.PAY]: "Pay",
  [ROUTES.EARN]: "Earn",
  [ROUTES.SETTING]: "Settings",
}

const PageTitle: FC = () => {
  const pathname = usePathname()

  return (
    <h1 className="text-2xl font-medium font-geist text-brand-header md:text-brand-page-title">
      {pathTitleMap[pathname]}
    </h1>
  )
}

export default PageTitle
