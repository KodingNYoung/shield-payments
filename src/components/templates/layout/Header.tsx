import { FC } from "@/utils/types"
import React from "react"
import PageTitle from "./_components/PageTitle"
import SidebarToggleButton from "./_components/SidebarToggleButton"
import SearchBar from "./_components/SearchBar"
import IconButton from "@/components/molecules/IconButton"
import Avatar from "@/components/atoms/Avatar"

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between h-14 sm:h-[72px] sm:border-b border-brand-sidebar px-4 lg:px-10 py-3 lg:py-4 gap-8 sticky top-0 z-[2] bg-white">
      <SidebarToggleButton />
      <PageTitle />
      <div className="hidden md:block flex-1 max-w-[450px]">
        <SearchBar />
      </div>
      <div className="flex items-center gap-2">
        <IconButton
          icon="icon-notification"
          className="relative before:absolute before:size-1.5 before:bg-error-notification before:top-1.5 before:right-2 before:rounded-full before:border before:border-white"
          iconProps={{ size: 20 }}
        />
        <Avatar src="https://images.pexels.com/photos/2100697/pexels-photo-2100697.jpeg" />
      </div>
    </header>
  )
}

export default Header
