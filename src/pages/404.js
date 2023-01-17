import styles from "./404.module.scss"

export default function NotFound() {
  return (
    <div className={styles.content}>
      <h2 className={styles.heading}>Page Not Found</h2>
      <p className={styles.text}>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}
