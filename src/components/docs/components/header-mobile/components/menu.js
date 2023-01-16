import styles from "./menu.module.scss"

export default function Menu({ onClick }) {
  return (
    <button className={styles.menu} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path
          d="M3 6L15 6L15 8L3 8V6ZM3 11L21 11V13L3 13V11ZM3 16L15 16V18L3 18V16Z"
          fill="inherit"
        />
      </svg>
      <span className={styles.text}>Menu</span>
    </button>
  )
}
