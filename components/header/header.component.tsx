import Hamburger from "../hamburger/hamburger.component";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src="images/PiliLogo_Gold.png" className={styles.logo}></img>
      </div>
      <Hamburger></Hamburger>
    </header>
  )
}
