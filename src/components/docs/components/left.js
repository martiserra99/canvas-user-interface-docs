import styles from "./left.module.scss"

import Link from "next/link"
import { useRouter } from "next/router"

import Logo from "src/components/logo"

export default function Left({ slug, left, show }) {
  const router = useRouter()
  return (
    <nav className={styles.left}>
      <div className={contentClassName(show)}>
        <Logo className={styles.logo} />
        <ul className={styles.sections}>
          {left.map((section) => (
            <li key={section.slug}>
              <h3 className={styles.heading}>{section.nav}</h3>
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
                      {subsection.nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function contentClassName(show) {
  let className = styles.content
  if (show) className += ` ${styles.show}`
  return className
}

function linkClassName(router, section, subsection) {
  let className = styles.link
  if (
    router.query.section === section &&
    router.query.subsection === subsection
  )
    className += ` ${styles.selected}`
  return className
}
