import styles from "./top-button.module.scss"

export default function TopButton() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <button className={styles.button} onClick={handleClick}>
      Return to top
    </button>
  )
}
