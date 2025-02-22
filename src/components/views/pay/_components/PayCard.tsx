import Icon from "@/components/atoms/Icon"
import { IconNames } from "@/utils/iconNames"
import { FC } from "@/utils/types"
import React from "react"

export type PayCardProps = {
  icon: IconNames
  title: string
  subtitle: string
}

const PayCard: FC<PayCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-[#f7f7f7] sm:bg-brand-sidebar grid gap-4 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-brand-primary">
      <Icon name={icon} className="!text-[40px] sm:!text-5xl" />
      <div className="grid sm:gap-2">
        <h3 className="text-base sm:text-xl font-semibold text-brand-header sm:text-brand-page-title">
          {title}
        </h3>
        <span className="text-xs sm:text-base text-brand-close-btn">
          {subtitle}
        </span>
      </div>
    </div>
  )
}

export default PayCard
