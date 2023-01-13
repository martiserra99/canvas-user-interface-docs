import styles from "./content.module.scss";

export default function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}
