import styles from "./left.module.scss";

import Link from "next/link";

export default function Left({ subjects }) {
  return (
    <nav className={styles.left}>
      <ul className={styles.subjects}>
        {subjects.map((subject) => (
          <li key={subject.slug}>
            <h3 className={styles.heading}>{subject.name}</h3>
            <ul className={styles.pages}>
              {subject.pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/how-to-use/${page.slug}`}
                    className={styles.link}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
