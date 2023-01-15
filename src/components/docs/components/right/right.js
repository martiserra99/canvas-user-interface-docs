import styles from "./right.module.scss";

import Link from "next/link";

export default function Right({ slug, right }) {
  return (
    <div className={styles.right}>
      <div className={styles.content}>
        <h4 className={styles.title}>On This Page</h4>
        <ul className={styles.sections}>
          {right.length === 0 ? (
            <span className={styles.empty}>There are no sections.</span>
          ) : (
            right.map((section) => (
              <li key={section.slug}>
                <Link href="#" className={styles.link}>
                  {section.nav}
                </Link>
                <ul className={styles.subsections}>
                  {section.subsections.map((subsection) => (
                    <li key={subsection.slug}>
                      <Link href="#" className={styles.link}>
                        {subsection.nav}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
