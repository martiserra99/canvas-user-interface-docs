import styles from "./content.module.scss"

import Markdown from "./components/markdown"
import { Fragment } from "react"

export default function Content({ content }) {
  return (
    <div className={styles.content}>
      <Markdown
        title={{ type: "h1", text: content.title }}
        content={content.content}
        className={markdownClassName(styles.docs, content.content)}
      />
      {content.sections.map((section) => (
        <Fragment key={section.slug}>
          <Markdown
            id={section.slug}
            title={{ type: "h2", text: section.title }}
            content={section.content}
            className={markdownClassName(styles.section, section.content)}
          />
          {section.subsections.map((subsection) => (
            <Markdown
              key={subsection.slug}
              id={`${section.slug}/${subsection.slug}`}
              title={{ type: "h3", text: subsection.title }}
              content={subsection.content}
              className={markdownClassName(
                styles.subsection,
                subsection.content
              )}
            />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

function markdownClassName(className, content) {
  if (content.trim() === "") return (className += ` ${styles.empty}`)
  return className
}
