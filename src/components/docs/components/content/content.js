import styles from "./content.module.scss";

import Markdown from "./components/markdown";
import { Fragment } from "react";

export default function Content({ content }) {
  return (
    <div className={styles.content}>
      <Markdown
        id={content.slug}
        title={{ type: "h1", text: content.title }}
        content={content.content}
        className={styles.docs}
      />
      {content.sections.map((section) => (
        <Fragment key={section.slug}>
          <Markdown
            id={section.slug}
            title={{ type: "h2", text: section.title }}
            content={section.content}
            className={styles.section}
          />
          {section.subsections.map((subsection) => (
            <Markdown
              key={subsection.slug}
              id={subsection.slug}
              title={{ type: "h3", text: subsection.title }}
              content={subsection.content}
              className={styles.subsection}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
