import Icon from "@/components/atoms/Icon"
import { ROUTES } from "@/utils/constants"
import Link from "next/link"
import React from "react"

const Custom404 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-[calc(100%_-_56px)] sm:h-[calc(100%_-_72px)]">
      <h1 className="text-9xl font-extrabold text-[#292D32]">4☹️4 </h1>
      <span className="text-sm">
        Sorry, the page you are looking for does not exist{" "}
      </span>
      <Link
        className="text-sm font-medium text-brand-navitem flex gap-1 items-center"
        href={ROUTES.DASHBOARD}
      >
        Go to Dashboard <Icon name="icon-arrow-right" />
      </Link>
    </div>
  )
}

export default Custom404
