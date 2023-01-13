import styles from "./menu.module.scss";

export default function Menu({ open, onClick }) {
  const content = open ? (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path
        d="M16 14.1147L22.6 7.51468L24.4853 9.40001L17.8853 16L24.4853 22.6L22.6 24.4853L16 17.8853L9.40001 24.4853L7.51468 22.6L14.1147 16L7.51468 9.40001L9.40001 7.51468L16 14.1147Z"
        fill="inherit"
      />
    </svg>
  ) : (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path
        d="M28 24H12V21.3333H28V24ZM28 17.3333H4V14.6667H28V17.3333ZM28 10.6667H12V8H28V10.6667Z"
        fill="inherit"
      />
    </svg>
  );

  return (
    <button className={styles.menu} onClick={onClick}>
      {content}
    </button>
  );
}
