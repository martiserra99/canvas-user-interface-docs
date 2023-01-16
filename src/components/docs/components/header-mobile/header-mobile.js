import styles from "./header-mobile.module.scss"

import Menu from "./components/menu"
import TopButton from "./components/top-button"

export default function HeaderMobile({ onClickMenu }) {
  return (
    <header className={styles.header}>
      <Menu onClick={onClickMenu} />
      <TopButton />
    </header>
  )
}
