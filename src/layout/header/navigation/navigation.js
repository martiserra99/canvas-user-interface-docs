import styles from "./navigation.module.scss";

import Link from "next/link";
import GithubIcon from "src/components/github-icon";
import LinkedinIcon from "src/components/linkedin-icon";
import WebIcon from "src/components/web-icon";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
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
          <GithubIcon fill="inherit" />
        </a>
        <a href="#" className={styles.icon}>
          <LinkedinIcon fill="inherit" />
        </a>
        <a href="#" className={styles.icon}>
          <WebIcon fill="inherit" />
        </a>
      </div>
    </nav>
  );
}
