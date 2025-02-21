import { FC } from "@/utils/types"
import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { SidebarProvider } from "@/providers/sidebarProvider"

const Layout: FC = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen dark">
        <Sidebar />
        <div className="pl-0 md:pl-[250px] w-full">
          <Header />
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Layout
