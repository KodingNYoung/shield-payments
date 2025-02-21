import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      geist: ["var(--font-geist)"],
      inter: ["var(--font-inter)"],
    },
    extend: {
      colors: {
        brand: {
          "primary": "#8B5CF6",
          "sidebar": "#F5F5F5",
          "border": "#E9EAEB",
          "navitem": "#A4A7AE",
          "page-title": "#414651",
          "page-title-darker": "#292D32",
          "close-btn": "#6B7280",
          "dark-mode-toggle": "#EBEBEB",
        },
        error: {
          notification: "#FE4848",
        },
      },
      borderRadius: {
        x10: "0.625rem", // 10px
      },
    },
  },
  plugins: [],
} satisfies Config
