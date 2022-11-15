import Footer from "../../footer/footer";
import Header from "../../header/header.component";
import TwoColumn from "../two-column/two-column.layout";
import styles from "./main.module.scss"

export default function MainLayout(props: any) {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <TwoColumn left={<div style={{ height: '200px', background: 'blue' }}>left</div>} right={<div style={{ height: '200px', background: 'red' }}>right</div>}>
        </TwoColumn>
      </main>
      <Footer></Footer>
    </div>
  )
}
