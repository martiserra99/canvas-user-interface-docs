import styles from "./message-cookies.module.scss"

export default function MessageCookies({ onRefuse, onAccept }) {
  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h3 className={styles.heading}>Cookie Settings</h3>
        <p className={styles.paragraph}>
          This website uses cookies through the use of Google Analytics to
          analyze traffic and obtain statistical information.
        </p>
        <div className={styles.buttons}>
          <button className={styles.refuse} onClick={onRefuse}>
            Refuse All
          </button>
          <button className={styles.accept} onClick={onAccept}>
            Accept All
          </button>
        </div>
      </div>
    </>
  )
}
