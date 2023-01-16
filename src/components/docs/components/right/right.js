import styles from "./right.module.scss"

import Link from "next/link"
import { useRef } from "react"

export default function Right({ slug, right }) {
  const links = useRef([])
  const addLink = (link) => links.current.push(link)

  function handleLinkClick(e) {
    e.preventDefault()
    const top = getLinkTop(e.target)
    window.scrollTo({ behavior: "smooth", top })
  }

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
                <Link
                  ref={addLink}
                  href={`#${section.slug}`}
                  className={styles.link}
                  onClick={handleLinkClick}
                >
                  {section.nav}
                </Link>
                <ul className={styles.subsections}>
                  {section.subsections.map((subsection) => (
                    <li key={subsection.slug}>
                      <Link
                        ref={addLink}
                        href={`#${section.slug}/${subsection.slug}`}
                        className={styles.link}
                        onClick={handleLinkClick}
                      >
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
  )
}

function getLinkTop(link) {
  const elem = document.getElementById(link.getAttribute("href").split("#")[1])
  const elemTop = elem.getBoundingClientRect().top
  const bodyTop = document.body.getBoundingClientRect().top
  return elemTop - bodyTop - 120
}
