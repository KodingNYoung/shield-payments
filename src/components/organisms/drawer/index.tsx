"use client"

import { cls } from "@/utils/helpers"
import { useMounted } from "@/utils/hooks"
import { FC, TWClassNames } from "@/utils/types"
import { AnimatePresence, motion, MotionProps } from "motion/react"
import React from "react"
import ReactDOM from "react-dom"

export type DrawerSlots = "root" | "overlay" | "drawer" | "content"

type Props = {
  isOpen: boolean
  close: () => void
  motionProps?: MotionProps
  classNames?: { [slot in DrawerSlots]?: TWClassNames }
}

const Drawer: FC<Props> = ({
  close,
  isOpen,
  motionProps = { initial: { x: 50 }, animate: { x: 0 }, exit: { x: 50 } },
  classNames,
  children,
}) => {
  const isMounted = useMounted()
  return isMounted
    ? ReactDOM.createPortal(
        <>
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                className={cls(
                  "fixed z-[1000] top-0 right-0 left-0 bottom-0",
                  classNames?.root
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className={cls(
                    "absolute top-0 left-0 w-full h-full bg-black bg-opacity-50",
                    classNames?.overlay
                  )}
                  onClick={close}
                />
                <motion.div
                  className={cls(
                    "absolute p-4 right-0 h-full",
                    classNames?.drawer
                  )}
                  {...motionProps}
                  transition={{ type: "spring", bounce: 0.4 }}
                >
                  <main
                    className={cls(
                      "bg-white h-full w-full rounded-2xl",
                      classNames?.content
                    )}
                  >
                    {children}
                  </main>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </>,
        document.getElementById("portal") as HTMLElement
      )
    : null
}

export default Drawer
