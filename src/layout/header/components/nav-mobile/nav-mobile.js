import styles from "./nav-mobile.module.scss";

import Link from "next/link";

import IcGithub from "../ic-github";
import IcLinkedin from "../ic-linkedin";
import IcWeb from "../ic-web";

export default function NavMobile({ open }) {
  let className = styles.nav;
  if (open) className += " " + styles.open;
  return (
    <div className={className}>
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
    </div>
  );
}
