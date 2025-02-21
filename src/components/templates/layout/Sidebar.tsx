"use client"

import { FC } from "@/utils/types"
import React from "react"
import CompanyDetails from "./_components/CompanyDetails"
import SidebarNav from "./_components/SidebarNav"
import DarkModeToggle from "./_components/DarkModeToggle"
import { useSidebar } from "@/providers/sidebarProvider"
import { cls } from "@/utils/helpers"
import Icon from "@/components/atoms/Icon"
import SearchBar from "./_components/SearchBar"

const Sidebar: FC = () => {
  const { isCollapsed, close } = useSidebar()
  return (
    <aside
      className={cls(
        "fixed w-full md:w-[250px] h-full bg-brand-sidebar flex flex-col gap-3 p-4 pb-6 border-r border-brand-border border-opacity-50 md:left-0 transition-[left] duration-200",
        isCollapsed ? "-left-full" : "left-0"
      )}
    >
      <div className="flex justify-between items-start">
        <CompanyDetails />
        <button className="md:hidden text-brand-close-btn" onClick={close}>
          <Icon name="icon-close" size={20} />
        </button>
      </div>
      <div className="sm:hidden pt-8">
        <SearchBar />
      </div>
      <SidebarNav />
      <DarkModeToggle />
      <div className="text-[#BABABC] py-4 text-xs border-t border-[#EDEDEF] text-center">
        © 2025 Sheild Payments V.1.0
      </div>
    </aside>
  )
}

export default Sidebar
