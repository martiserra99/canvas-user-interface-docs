import styles from "./header.module.scss";

import { useState } from "react";

import Logo from "./components/logo";
import Menu from "./components/menu";
import Nav from "./components/nav/nav";
import NavMobile from "./components/nav-mobile/nav-mobile";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <Logo />
          <Nav />
          <Menu open={open} onClick={() => setOpen((open) => !open)} />
        </div>
      </header>
      <NavMobile open={open} />
    </>
  );
}
