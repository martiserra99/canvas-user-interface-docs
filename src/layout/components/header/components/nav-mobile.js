import styles from "./nav-mobile.module.scss"

import Link from "next/link"
import { useRouter } from "next/router"
import { useRef } from "react"
import { Transition } from "react-transition-group"

import IcGithub from "./ic-github"
import IcLinkedin from "./ic-linkedin"
import IcWeb from "./ic-web"

export default function NavMobile({ open }) {
  const router = useRouter()
  const nodeRef = useRef()
  return (
    <Transition nodeRef={nodeRef} in={open} timeout={200}>
      {(state) => (
        <div ref={nodeRef} className={styles.nav + " " + styles[state]}>
          <div className={styles.content + " " + styles[state]}>
            <div className={styles.links}>
              <Link
                href="/how-to-use/getting-started/overview"
                className={linkClassName(router, "/how-to-use")}
              >
                How To Use
              </Link>
              <Link
                href="/elements/views/area"
                className={linkClassName(router, "/elements")}
              >
                Elements
              </Link>
              <Link
                href="/examples"
                className={linkClassName(router, "/examples")}
              >
                Examples
              </Link>
            </div>
            <div className={styles.icons}>
              <a
                href="https://github.com/martiserra99/canvas-user-interface"
                target="_blank"
                rel="noreferrer"
                className={styles.icon}
              >
                <IcGithub fill="inherit" />
              </a>
              <a
                href="https://www.linkedin.com/in/mart%C3%AD-serra-molina-3ababa23a/"
                target="_blank"
                rel="noreferrer"
                className={styles.icon}
              >
                <IcLinkedin fill="inherit" />
              </a>
              {/* <a href="#" className={styles.icon}>
                <IcWeb fill="inherit" />
              </a> */}
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}

function linkClassName(router, path) {
  let className = styles.link
  if (router.pathname.startsWith(path)) className += ` ${styles.selected}`
  return className
}
