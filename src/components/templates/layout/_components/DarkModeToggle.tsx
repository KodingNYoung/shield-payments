import { FC } from "@/utils/types"
import React, { useState } from "react"
import DarkModeToggleButton from "./DarkModeToggleButton"

const DarkModeToggle: FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="p-0.5 bg-brand-dark-mode-toggle rounded-x10">
      <div className="relative flex rounded-[inherit]">
        <div
          className="absolute top-0 h-full w-1/2 bg-white rounded-[inherit] transition-all duration-150"
          style={{ left: `${activeTab * 50}%` }}
        />
        <DarkModeToggleButton
          label="Light"
          icon="icon-sun"
          active={activeTab === 0}
          onSelect={() => setActiveTab(0)}
        />
        <DarkModeToggleButton
          label="Dark"
          icon="icon-moon"
          active={activeTab === 1}
          onSelect={() => setActiveTab(1)}
        />
      </div>
    </section>
  )
}

export default DarkModeToggle
