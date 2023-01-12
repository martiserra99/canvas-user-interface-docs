import styles from "./header.module.scss";

import Logo from "./logo/logo";
import Navigation from "./navigation/navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
