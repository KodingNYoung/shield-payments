"use client"

import { FC } from "@/utils/types"
import { createContext, useContext, useState } from "react"

type SidebarContextType = {
  isCollapsed: boolean
  open: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  open: () => {},
  close: () => {},
})

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar should be called inside a SidebarProvider")
  }
  return context
}

export const SidebarProvider: FC = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const open = () => setIsCollapsed(false)

  const close = () => setIsCollapsed(true)

  return (
    <SidebarContext.Provider value={{ isCollapsed, close, open }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext
