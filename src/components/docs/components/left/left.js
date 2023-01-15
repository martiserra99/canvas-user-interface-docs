import styles from "./left.module.scss";

import Link from "next/link";

export default function Left({ sections }) {
  return (
    <nav className={styles.left}>
      <ul className={styles.sections}>
        {sections.map((section) => (
          <li key={section.slug}>
            <h3 className={styles.heading}>{section.name}</h3>
            <ul className={styles.subsections}>
              {section.subsections.map((subsection) => (
                <li key={subsection.slug}>
                  <Link
                    href={`/how-to-use/${subsection.slug}`}
                    className={styles.link}
                  >
                    {subsection.name}
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
