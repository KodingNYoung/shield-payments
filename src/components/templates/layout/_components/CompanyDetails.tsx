import Icon from "@/components/atoms/Icon"
import { FC } from "@/utils/types"
import React from "react"

const CompanyDetails: FC = () => {
  return (
    <div className="border-b border-brand-border border-opacity-50 flex gap-3 items-center pb-4">
      <div className="size-10 flex items-center justify-center text-brand-primary bg-white border-brand-border border-opacity-50 rounded-lg">
        <Icon name="icon-security" size={24} />
      </div>
      <div className="grid gap-px">
        <h2 className="text-base font-medium text-[#374151]">
          Shield Payments
        </h2>
        <span className="text-xs text-brand-close-btn">Free plan</span>
      </div>
    </div>
  )
}

export default CompanyDetails
