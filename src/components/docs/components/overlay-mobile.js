import styles from "./overlay-mobile.module.scss"

export default function OverlayMobile({ show, onClick }) {
  let className = styles.overlay
  if (show) className += ` ${styles.show}`
  return <div className={className} onClick={onClick} />
}
