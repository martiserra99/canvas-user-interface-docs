import styles from "./nav.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

import IcGithub from "src/layout/components/header/components/ic-github";
import IcLinkedin from "src/layout/components/header/components/ic-linkedin";
import IcWeb from "src/layout/components/header/components/ic-web";

export default function Nav() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link
          href="/how-to-use/getting-started/overview"
          className={linkClassName(router, "/how-to-use")}
        >
          How To Use
        </Link>
        <Link
          href="/elements/views/area"
          className={linkClassName(router, "/elements")}
        >
          Elements
        </Link>
        <Link href="/examples" className={linkClassName(router, "/examples")}>
          Examples
        </Link>
      </div>
      <div className={styles.icons}>
        <a
          href="https://github.com/martiserra99"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <IcGithub fill="inherit" />
        </a>
        <a
          href="https://www.linkedin.com/in/mart%C3%AD-serra-molina-3ababa23a/"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <IcLinkedin fill="inherit" />
        </a>
        {/* <a href="#" className={styles.icon}>
          <IcWeb fill="inherit" />
        </a> */}
      </div>
    </nav>
  );
}

function linkClassName(router, path) {
  let className = styles.link;
  if (router.pathname.startsWith(path)) className += ` ${styles.selected}`;
  return className;
}
