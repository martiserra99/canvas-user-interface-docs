import styles from "./header.module.scss"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Logo from "../../../components/logo"
import Menu from "./components/menu"
import Nav from "./components/nav"
import NavMobile from "./components/nav-mobile"

export default function Header() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [router.asPath])
  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <Logo className={styles.logo} />
          <Nav />
          <Menu open={open} onClick={() => setOpen((open) => !open)} />
        </div>
      </header>
      <NavMobile open={open} />
    </>
  )
}
