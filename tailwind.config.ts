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
          "header": "#292D32",
          "close-btn": "#6B7280",
          "dark-mode-toggle": "#EBEBEB",
          "table-data": "#4B5563",
        },
        neutral: {
          "badge": "#374151",
          "badge-border": "#E5E7EB",
        },
        error: {
          "notification": "#FE4848",
          "badge": "#F45D48",
          "badge-border": "#F9AEA3",
          "badge-bg": "#FDDFDA",
        },
        success: {
          "text": "#5CAAAA",
          "badge": "#458787",
          "badge-border": "#ADD5D5",
          "badge-bg": "#F7FCFC",
        },
      },
      borderRadius: {
        x10: "0.625rem", // 10px
        x20: "1.25rem", // 20px
      },
    },
  },
  plugins: [],
} satisfies Config
