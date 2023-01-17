import "styles/globals.scss"

import Head from "next/head"
import Script from "next/script"
import { getCookie, setCookie } from "cookies-next"

import Layout from "src/layout/layout"
import MessageCookies from "src/components/message-cookies"
import { useEffect, useState } from "react"

export default function App({ Component, pageProps }) {
  const [cookies, setCookies] = useState(null)
  useEffect(() => setCookies(getCookie("cookies")), [])
  const handleCookiesRefuse = () => {
    setCookie("cookies", "refuse", { maxAge: 60 * 60 * 24 * 365 })
    setCookies("refuse")
  }
  const handleCookiesAccept = () => {
    setCookie("cookies", "accept", { maxAge: 60 * 60 * 24 * 365 })
    setCookies("accept")
  }
  return (
    <>
      <Head>
        <title>
          Canvas User Interface - The JavaScript Library To Build Canvas User
          Interfaces
        </title>
        <link rel="icon" href="/favicon/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta charSet="utf-8" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        {cookies === undefined && (
          <MessageCookies
            onRefuse={handleCookiesRefuse}
            onAccept={handleCookiesAccept}
          />
        )}
        {cookies === "accept" && (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-R5D2ZPSLVB"
            />
            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-R5D2ZPSLVB');
              `}
            </Script>
          </>
        )}
      </Layout>
    </>
  )
}
