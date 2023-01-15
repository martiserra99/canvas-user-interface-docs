import styles from "./content.module.scss";

import Markdown from "./components/markdown";
import { Fragment } from "react";

export default function Content({ content }) {
  return (
    <div className={styles.content}>
      <Markdown
        id={content.slug}
        content={content.content}
        className={styles.docs}
      />
      {content.sections.map((section) => (
        <Fragment key={section.slug}>
          <Markdown
            id={section.slug}
            content={section.content}
            className={styles.section}
          />
          {section.subsections.map((subsection) => (
            <Markdown
              key={subsection.slug}
              id={subsection.slug}
              content={subsection.content}
              className={styles.subsection}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
}
