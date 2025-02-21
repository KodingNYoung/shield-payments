import { FC } from "@/utils/types"
import React from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout: FC = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
