import Icon from "@/components/atoms/Icon"
import { useSidebar } from "@/providers/sidebarProvider"
import { FC } from "@/utils/types"
import React from "react"

const SidebarToggleButton: FC = () => {
  const { open } = useSidebar()
  return (
    <button
      className="md:hidden flex items-center justify-center !leading-none"
      onClick={open}
    >
      <Icon name="icon-menu" size={24} />
    </button>
  )
}

export default SidebarToggleButton
