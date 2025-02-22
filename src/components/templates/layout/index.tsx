import { FC } from "@/utils/types"
import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { SidebarProvider } from "@/providers/sidebarProvider"

const Layout: FC = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="pl-0 md:pl-[250px] flex-1">
          <Header />
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Layout
