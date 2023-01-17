import styles from "./404.module.scss"

import Head from "next/head"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | Canvas User Interface</title>
      </Head>
      <div className={styles.content}>
        <h2 className={styles.heading}>Page Not Found</h2>
        <p className={styles.text}>
          The page you are looking for does not exist.
        </p>
      </div>
    </>
  )
}
