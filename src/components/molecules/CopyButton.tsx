import { FC } from "@/utils/types"
import React, { HTMLProps, useState } from "react"
import { cls, copy } from "@/utils/helpers"
import Icon from "../atoms/Icon"

type Props = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  text: string
}

const CopyButton: FC<Props> = ({ children, className, text, ...props }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <button
      className={cls(isCopied && "text-success-badge", className)}
      onClick={() => {
        copy(text)
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1000)
      }}
      type="button"
      {...props}
    >
      {isCopied ? <Icon name="icon-check" size={16} className="" /> : children}
    </button>
  )
}

export default CopyButton
