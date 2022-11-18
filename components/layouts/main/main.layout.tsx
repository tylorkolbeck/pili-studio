import useMenu from "../../../hooks/useMenu/useMenu";
import Footer from "../../footer/footer";
import Header from "../../header/header.component";
import MenuFullScreen from "../../menu-full-screen/menu-full-screen.component";
import styles from "./main.module.scss"
export default function MainLayout(props: any) {
  const { isMenuOpen, toggleMenu } = useMenu()

  return (
    <div className={styles.main}>
      <MenuFullScreen isOpen={isMenuOpen} onClick={toggleMenu}></MenuFullScreen>
      <Header toggleMenu={toggleMenu}></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
