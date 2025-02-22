import { CURRENCY } from "./constants"
import { TWClassNames } from "./types"

export function cls(
  ...classNames: (TWClassNames | string | null | undefined | false)[]
) {
  const validClasses = classNames.filter((className) => !!className) as string[]
  return validClasses.join(" ")
}

export const round = (num: number, dp: number = 2) => {
  const multiplier = Math.pow(10, dp || 0)
  return Math.round((num + Number.EPSILON) * multiplier) / multiplier
}

export const formatWithSeparator = (num: number, separator: string = ",") => {
  if (!num) return num.toFixed(2)
  const [integer, decimal] = num.toFixed(2).split(".")
  const numArray = integer.split("")
  let strVal = ""
  while (numArray.length) {
    const threeVal = numArray.splice(-3).join("")
    strVal = (numArray.length ? separator : "") + threeVal + strVal
  }
  return decimal ? `${strVal}.${decimal}` : strVal
}

export const compressNumber = (num: number, dp: number = 2) => {
  const strDigit = parseInt(num.toString()).toString()

  if (strDigit.length < 4)
    return num.toString().match(/^\d+(?:\.\d{0,3})?/)?.input
  else if (strDigit.length >= 4 && strDigit.length < 7) {
    return round(num / 1000, dp) + "k"
  } else if (strDigit.length >= 7 && strDigit.length < 10) {
    return (num / 1000000).toFixed(dp) + "M"
  } else if (strDigit.length >= 10 && strDigit.length < 13) {
    return (num / 1000000000).toFixed(dp) + "B"
  } else if (strDigit.length >= 13 && strDigit.length < 16) {
    return (num / 1000000000000).toFixed(dp) + "T"
  }
}

export const formatAmount = (num: number, compress?: boolean) => {
  const formatted = compress ? compressNumber(num) : formatWithSeparator(num)

  return `${CURRENCY}${formatted}`
}
