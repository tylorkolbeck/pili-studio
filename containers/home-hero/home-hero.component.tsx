import TwoColumn from "../../components/layouts/two-column/two-column.layout";
import styles from "./home-hero.module.scss";

export default function HomeHero() {

  return (
    <TwoColumn left={<div className={styles.homeHero}>
      <h2 className="text-centered text-accent text-thin t14">BONDED · TOGETHER · CONNECTED</h2>
      <div className={styles.gifWrapper}>
        <img className={styles.homeHero_Gif} src="videos/Pili-LandingGif-gold.gif"></img>
      </div>
      <h2 className="text-centered text-accent text-thin t14">A FINE ART, PRINTMAKING, PHOTOGRAPHY & DESIGN STUDIO</h2>
    </div>} right={<div style={{ height: '200px', background: 'red' }}>right</div>}>
    </TwoColumn>


  )
}
