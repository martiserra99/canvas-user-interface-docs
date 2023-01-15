import styles from "./markdown.module.scss";

import ReactMarkdown from "react-markdown";

import Code from "src/components/code";

export default function Markdown({ id, content }) {
  return (
    <div id={id}>
      <ReactMarkdown
        components={{
          h1({ children }) {
            return <h1 className={styles.h1}>{children}</h1>;
          },
          h2({ children }) {
            return <h2 className={styles.h2}>{children}</h2>;
          },
          h3({ children }) {
            return <h3 className={styles.h3}>{children}</h3>;
          },
          p({ children }) {
            return <p className={styles.p}>{children}</p>;
          },
          ul({ children }) {
            return <ul className={styles.ul}>{children}</ul>;
          },
          code({ inline, className, children }) {
            return inline ? (
              <code className={styles.code}>{children}</code>
            ) : (
              <Code
                language={className.split("-")[1]}
                customStyle={{ margin: "0 0 2rem 0" }}
              >
                {children}
              </Code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
