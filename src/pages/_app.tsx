import { geist, inter } from "@/assets/fonts"
import Layout from "@/components/templates/layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${geist.variable} ${inter.variable}`}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
