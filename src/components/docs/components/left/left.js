import styles from "./left.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Left({ slug, left }) {
  const router = useRouter();
  return (
    <nav className={styles.left}>
      <ul className={styles.sections}>
        {left.map((section) => (
          <li key={section.slug}>
            <h3 className={styles.heading}>{section.name}</h3>
            <ul className={styles.subsections}>
              {section.subsections.map((subsection) => (
                <li key={subsection.slug}>
                  <Link
                    href={`/${slug}/${section.slug}/${subsection.slug}`}
                    className={linkClassName(
                      router,
                      section.slug,
                      subsection.slug
                    )}
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

function linkClassName(router, section, subsection) {
  let className = styles.link;
  if (
    router.query.section === section &&
    router.query.subsection === subsection
  )
    className += ` ${styles.selected}`;
  return className;
}
