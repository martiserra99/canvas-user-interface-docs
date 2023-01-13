import styles from "./left.module.scss";

import Link from "next/link";

export default function Left() {
  return (
    <nav className={styles.left}>
      <ul className={styles.sections}>
        <li className={styles.section}>
          <h3 className={styles.heading}>Getting Started</h3>
          <ul className={styles.pages}>
            <li>
              <Link href="#" className={styles.link}>
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Installation
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Quick Start
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.section}>
          <h3 className={styles.heading}>Getting Started</h3>
          <ul className={styles.pages}>
            <li>
              <Link href="#" className={styles.link}>
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Installation
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Quick Start
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.section}>
          <h3 className={styles.heading}>Getting Started</h3>
          <ul className={styles.pages}>
            <li>
              <Link href="#" className={styles.link}>
                Overview
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Installation
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Quick Start
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
