import "styles/globals.scss";

import Head from "next/head";

import Layout from "src/layout/layout";

export default function App({ Component, pageProps }) {
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
      </Layout>
    </>
  );
}
