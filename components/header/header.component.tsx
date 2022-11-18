import Hamburger from "../hamburger/hamburger.component";
import styles from "./header.module.scss";
import useScroll from "../../hooks/useScroll/useScroll";
import React, { MouseEventHandler } from "react";

export default function Header(props: HeaderProps) {
  const { isScrolled } = useScroll();

  return (
    <header className={styles.header} id="mainHeader" style={{ background: isScrolled ? 'var(--color-primary)' : 'transparent' }}>
      <div>
        <img src="images/PiliLogo_Gold.png" className={styles.logo}></img>
      </div>
      <Hamburger color={isScrolled ? 'var(--color-secondary)' : 'var(--color-primary)'} onClick={(event) => props.toggleMenu(event)}></Hamburger>
    </header>
  )
}

interface HeaderProps {
  toggleMenu: MouseEventHandler
}