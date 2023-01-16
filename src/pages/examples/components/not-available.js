import styles from "./not-available.module.scss"

export default function NotAvailable() {
  return (
    <div className={styles.content}>
      <p className={styles.text}>
        The examples are not available in small screens.
      </p>
    </div>
  )
}
