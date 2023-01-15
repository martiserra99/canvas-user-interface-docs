import styles from "./markdown.module.scss";

import ReactMarkdown from "react-markdown";

import Code from "src/components/code";

export default function Markdown({ id, className, title, content }) {
  return (
    <div id={id} className={className}>
      <Title {...title} />
      <ReactMarkdown
        components={{
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

function Title({ type, text }) {
  if (type === "h1") return <h1 className={styles.h1}>{text}</h1>;
  if (type === "h2") return <h2 className={styles.h2}>{text}</h2>;
  return <h3 className={styles.h3}>{text}</h3>;
}
