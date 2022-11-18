import Footer from "../../footer/footer";
import Header from "../../header/header.component";
import styles from "./main.module.scss"
export default function MainLayout(props: any) {

  return (
    <div className={styles.main}>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
