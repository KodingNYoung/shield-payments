import Icon from "@/components/atoms/Icon"
import { ASSET_CLASSES } from "@/utils/constants"
import { IconNames } from "@/utils/iconNames"
import { AssetClass, FC } from "@/utils/types"
import React from "react"

type Props = {
  type: AssetClass
  color: string
}

const assetIcon: { [type in AssetClass]: IconNames } = {
  [ASSET_CLASSES.CASH]: "icon-moneys",
  [ASSET_CLASSES.CRYPTO]: "icon-bitcoin-btc",
  [ASSET_CLASSES.STOCKS]: "icon-activity",
  [ASSET_CLASSES.BONDS]: "icon-chart-2",
}

const AssetTag: FC<Props> = ({ type, color }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <Icon name={assetIcon[type]} size={24} style={{ color }} />
      <span className="text-sm font-medium text-brand-close-btn">{type}</span>
    </div>
  )
}

export default AssetTag
