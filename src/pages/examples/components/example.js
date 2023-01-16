import styles from "./example.module.scss"

export default function Example({ src, onClick }) {
  return <iframe src={src} className={styles.example} onClick={onClick} />
}
