import styles from "./nav.module.scss";

import Link from "next/link";

import IcGithub from "src/layout/components/header/components/ic-github";
import IcLinkedin from "src/layout/components/header/components/ic-linkedin";
import IcWeb from "src/layout/components/header/components/ic-web";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link href="/" className={styles.link + " " + styles.selected}>
          How To Use
        </Link>
        <Link href="/" className={styles.link}>
          Elements
        </Link>
        <Link href="/" className={styles.link}>
          Examples
        </Link>
      </div>
      <div className={styles.icons}>
        <a href="#" className={styles.icon}>
          <IcGithub fill="inherit" />
        </a>
        <a href="#" className={styles.icon}>
          <IcLinkedin fill="inherit" />
        </a>
        <a href="#" className={styles.icon}>
          <IcWeb fill="inherit" />
        </a>
      </div>
    </nav>
  );
}
