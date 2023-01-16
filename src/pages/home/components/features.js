import styles from "./features.module.scss";

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <h2>Approachable</h2>
        <p>
          A truly simple and yet powerful API to build user interfaces using UI
          elements.
        </p>
      </div>
      <div className={styles.feature}>
        <h2>Extensible</h2>
        <p>
          Completely extensible providing you ways to build your own types of UI
          elements.
        </p>
      </div>
      <div className={styles.feature}>
        <h2>Versatile</h2>
        <p>
          Can be used for different purposes giving you a way to do anything you
          want.
        </p>
      </div>
    </section>
  );
}
