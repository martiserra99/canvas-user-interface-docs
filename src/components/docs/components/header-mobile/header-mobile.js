import styles from "./header-mobile.module.scss"

import Menu from "./components/menu"
import TopButton from "./components/top-button"

export default function HeaderMobile() {
  return (
    <header className={styles.header}>
      <Menu />
      <TopButton />
    </header>
  )
}
