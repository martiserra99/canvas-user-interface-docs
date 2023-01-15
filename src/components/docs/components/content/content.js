import styles from "./content.module.scss";

import Markdown from "./components/markdown";

export default function Content({ content }) {
  return (
    <div className={styles.content}>
      <Markdown id="" content={content} />
    </div>
  );
}
