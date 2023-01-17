import styles from "./docs.module.scss"

import Head from "next/head"
import { useState } from "react"

import HeaderMobile from "./components/header-mobile/header-mobile"
import OverlayMobile from "./components/overlay-mobile"
import Content from "./components/content/content"
import Left from "./components/left"
import Right from "./components/right"

export default function Docs({ slug, left, right, content }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Head>
        <title>{`${content.title} | Canvas User Interface`}</title>
      </Head>
      <HeaderMobile onClickMenu={() => setOpen(true)} />
      <OverlayMobile show={open} onClick={() => setOpen(false)} />
      <div className={styles.docs}>
        <Left slug={slug} left={left} show={open} />
        <Content content={content} />
        <Right right={right} />
      </div>
    </>
  )
}
