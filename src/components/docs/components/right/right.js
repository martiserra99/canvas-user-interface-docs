import styles from "./right.module.scss"

import Link from "next/link"
import { useEffect, useState, useCallback } from "react"

export default function Right({ slug, right }) {
  const [active, setActive] = useState(null)
  const [marker, setMarker] = useState(null)
  const [links, setLinks] = useState([])
  const addLink = useCallback((link) => {
    setLinks((currLinks) => [link, ...currLinks])
  }, [])

  useEffect(() => {
    const listener = () => {
      for (const [i, link] of links.entries())
        if (window.scrollY + 1 >= getLinkElementTop(link)) {
          setActive(link.dataset.id)
          setMarker(links.length - i - 1)
          return
        }
      setActive(null)
      setMarker(null)
    }
    listener()
    window.addEventListener("scroll", listener)
    return () => window.removeEventListener("scroll", listener)
  }, [links])

  function handleLinkClick(e) {
    e.preventDefault()
    const top = getLinkElementTop(e.target)
    window.scrollTo({ behavior: "smooth", top })
  }

  return (
    <div className={styles.right}>
      <div className={styles.content}>
        <h4 className={styles.title}>On This Page</h4>
        <ul className={styles.sections}>
          <div className={styles.marker} style={markerStyle(marker)} />
          {right.length === 0 ? (
            <span className={styles.empty}>There are no sections.</span>
          ) : (
            right.map((section, i) => (
              <li key={section.slug}>
                <Link
                  data-id={section.slug}
                  ref={addLink}
                  href={`#${section.slug}`}
                  onClick={handleLinkClick}
                  className={linkClassName(section.slug === active)}
                >
                  {section.nav}
                </Link>
                <ul className={styles.subsections}>
                  {section.subsections.map((subsection) => (
                    <li key={subsection.slug}>
                      <Link
                        data-id={`${section.slug}/${subsection.slug}`}
                        ref={addLink}
                        href={`#${section.slug}/${subsection.slug}`}
                        onClick={handleLinkClick}
                        className={linkClassName(
                          `${section.slug}/${subsection.slug}` === active
                        )}
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

function markerStyle(position) {
  if (position === null) return { opacity: 0 }
  console.log(position)
  return { transform: `translateY(${position * 100}%)` }
}

function linkClassName(active) {
  let className = styles.link
  if (active) className += ` ${styles.active}`
  return className
}

function getLinkElementTop(link) {
  const elem = document.getElementById(link.getAttribute("href").split("#")[1])
  const elemTop = elem.getBoundingClientRect().top
  const bodyTop = document.body.getBoundingClientRect().top
  return elemTop - bodyTop - 120
}
