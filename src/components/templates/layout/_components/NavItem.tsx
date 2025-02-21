"use client"

import Icon from "@/components/atoms/Icon"
import { useSidebar } from "@/providers/sidebarProvider"
import { cls } from "@/utils/helpers"
import { IconNames } from "@/utils/iconNames"
import { FC, TWClassNames } from "@/utils/types"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useMemo } from "react"

type Slots = "root" | "icon" | "label"
type Props = {
  icon: IconNames
  label?: string
  link: string
  classNames?: { [slot in Slots]?: TWClassNames }
}

const NavItem: FC<Props> = ({ icon, label, link, classNames }) => {
  const pathname = usePathname()
  const { close } = useSidebar()

  const isActive = useMemo(() => link && pathname === link, [pathname, link])

  return (
    <Link
      href={link}
      data-active={isActive}
      className={cls(
        "flex items-center justify-start gap-3 p-2 rounded-xl group/navitem text-[#717680] data-[active=true]:text-white data-[active=true]:bg-brand-primary",
        classNames?.root
      )}
      onClick={close}
    >
      <Icon
        name={icon}
        size={20}
        className={cls(
          "text-brand-navitem group-data-[active=true]/navitem:text-white",
          classNames?.icon
        )}
      />
      {label && (
        <span
          className={cls(
            "whitespace-nowrap overflow-hidden font-medium",
            classNames?.label
          )}
        >
          {label}
        </span>
      )}
    </Link>
  )
}

export default NavItem
