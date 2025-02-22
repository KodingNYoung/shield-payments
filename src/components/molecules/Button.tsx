import { cls } from "@/utils/helpers"
import { FC, TWClassNames } from "@/utils/types"
import React, { HTMLProps } from "react"

type ButtonVariants = "primary" | "secondary"

type Props = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  type?: "submit" | "reset" | "button"
  variant?: ButtonVariants
}

const buttonVariant: { [variant in ButtonVariants]?: TWClassNames } = {
  primary: "bg-brand-primary text-white",
  secondary: "backdrop-blur-md bg-brand-sidebar text-brand-header",
}

const Button: FC<Props> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cls(
        "text-base font-medium rounded-2xl",
        buttonVariant[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
