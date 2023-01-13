import styles from "./right.module.scss";

import Link from "next/link";

export default function Right() {
  return (
    <div className={styles.right}>
      <h4 className={styles.title}>On This Page</h4>
      <ul className={styles.sections}>
        <li className={styles.section}>
          <Link href="#" className={styles.link}>
            Overview
          </Link>
          <ul className={styles.subsections}>
            <li className={styles.subsection}>
              <Link href="#" className={styles.link}>
                Overview
              </Link>
            </li>
            <li className={styles.subsction}>
              <Link href="#" className={styles.link}>
                Installation
              </Link>
            </li>
            <li className={styles.subsection}>
              <Link href="#" className={styles.link}>
                Quick Start
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.section}>
          <Link href="#" className={styles.link}>
            Overview
          </Link>
          <ul className={styles.subsections}>
            <li className={styles.subsection}>
              <Link href="#" className={styles.link}>
                Overview
              </Link>
            </li>
            <li className={styles.subsction}>
              <Link href="#" className={styles.link}>
                Installation
              </Link>
            </li>
            <li className={styles.subsection}>
              <Link href="#" className={styles.link}>
                Quick Start
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
