import "styles/globals.scss"

import Head from "next/head"

import Layout from "src/layout/layout"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Canvas User Interface - The JavaScript Library To Build Canvas User
          Interfaces
        </title>
        <meta
          name="description"
          content="Canvas User Interface is a JavaScript library used to build user interfaces using the canvas element. It manages all the complexities of using the canvas to let you develop anything you want as easy as possible."
        />
        <link rel="icon" href="/canvas-user-interface/favicon/favicon.png" />
        <link
          rel="apple-touch-icon"
          href="/canvas-user-interface/favicon/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          href="/canvas-user-interface/manifest.webmanifest"
        />
        <meta charSet="utf-8" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
