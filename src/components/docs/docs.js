import styles from "./docs.module.scss";

import Content from "./components/content/content";
import Left from "./components/left/left";
import Right from "./components/right/right";

export default function Docs({ slug, left, right, content }) {
  return (
    <div className={styles.docs}>
      <Left slug={slug} left={left} />
      <Content content={content} />
      <Right slug={slug} right={right} />
    </div>
  );
}
