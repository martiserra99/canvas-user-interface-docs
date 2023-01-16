import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Released under the{" "}
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          MIT license
        </a>
        .
      </p>
      <p className={styles.text}>
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://www.linkedin.com/in/mart%C3%AD-serra-molina-3ababa23a/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Martí Serra
        </a>
      </p>
    </footer>
  );
}
