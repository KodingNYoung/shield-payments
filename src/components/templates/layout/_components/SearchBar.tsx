import Icon from "@/components/atoms/Icon"
import { FC } from "@/utils/types"
import React from "react"

const SearchBar: FC = () => {
  return (
    <label
      className="w-full bg-brand-dark-mode-toggle sm:bg-brand-sidebar border border-brand-border border-opacity-50 rounded-x10 flex items-center gap-1 px-2 py-2.5"
      htmlFor="search"
    >
      <Icon
        name="icon-search-normal"
        size={16}
        className="text-brand-page-title"
      />
      <input
        className="flex-1 bg-transparent"
        name="search"
        id="search"
        placeholder="Search..."
      />
    </label>
  )
}

export default SearchBar
