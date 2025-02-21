import { HTMLProps, PropsWithChildren, ReactElement } from "react"

export type TWClassNames = HTMLProps<HTMLElement>["className"]

export type FC<PropsType = unknown> = {
  (
    props: { className?: TWClassNames } & PropsWithChildren<PropsType>, // These line automatically add `className` and `children` to all component using the `FC` type
    context?: unknown
  ): ReactElement | null
  displayName?: string
}
