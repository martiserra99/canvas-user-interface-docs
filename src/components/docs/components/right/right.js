import styles from "./right.module.scss"

import Link from "next/link"
import { useEffect, useState, useRef, useCallback } from "react"

export default function Right({ slug, right }) {
  const [active, setActive] = useState(null)
  const [marker, setMarker] = useState(null)
  const linksRef = useRef([])

  const scrollListner = useCallback(() => {
    for (const [i, link] of linksRef.current.entries()) {
      if (window.scrollY + 1 < linkElemTop(link)) continue
      setActive(link.dataset.id)
      setMarker(linksRef.current.length - i - 1)
      return
    }
    setActive(null)
    setMarker(null)
  }, [])

  useScrollListener(scrollListner)

  const handleLinkClick = (e) => {
    e.preventDefault()
    window.scrollTo({ behavior: "smooth", top: linkElemTop(e.target) })
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
                  data-id={linkId(section)}
                  ref={(link) => {
                    if (i === 0) linksRef.current = [link]
                    else linksRef.current.unshift(link)
                  }}
                  href={"#" + linkId(section)}
                  onClick={handleLinkClick}
                  className={linkClassName(linkId(section) === active)}
                >
                  {section.nav}
                </Link>
                <ul className={styles.subsections}>
                  {section.subsections.map((subsection) => (
                    <li key={subsection.slug}>
                      <Link
                        data-id={linkId(section, subsection)}
                        ref={(link) => linksRef.current.unshift(link)}
                        href={"#" + linkId(section, subsection)}
                        onClick={handleLinkClick}
                        className={linkClassName(
                          linkId(section, subsection) === active
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

function useScrollListener(listener) {
  useEffect(() => {
    listener()
    window.addEventListener("scroll", listener)
    return () => window.removeEventListener("scroll", listener)
  }, [listener])
}

function linkId(...sections) {
  return sections.map((section) => section.slug).join("/")
}

function linkClassName(active) {
  let className = styles.link
  if (active) className += ` ${styles.active}`
  return className
}

function linkElemTop(link) {
  const elem = document.getElementById(link.getAttribute("href").split("#")[1])
  const elemTop = elem.getBoundingClientRect().top
  const bodyTop = document.body.getBoundingClientRect().top
  return elemTop - bodyTop - 120
}

function markerStyle(position) {
  if (position === null) return { opacity: 0 }
  return { transform: `translateY(${position * 100}%)` }
}
