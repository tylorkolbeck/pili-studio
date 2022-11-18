import Head from 'next/head'
import TwoColumn from '../components/layouts/two-column/two-column.layout'
import styles from '../styles/Home.module.css'
export default function Home() {

  return (
    <>
      <Head>
        <title>Pili Studio</title>
        <meta name="description" content="A Fine Art, Printmaking, Photography & Design Studio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jop7hyo.css"></link>
      </Head>

      <div style={{ maxHeight: '100vh' }}>
        <TwoColumn
          left={
            <div className={styles.homeHero} style={{ paddingTop: "25%" }}>
              <h2 className="text-centered text-accent text-thin t14">BONDED · TOGETHER · CONNECTED</h2>
              <div className={styles.gifWrapper}>
                <img className={styles.homeHero_Gif} src="videos/Pili-LandingGif-gold.gif" style={{ objectFit: 'contain', width: '100%' }}></img>
              </div>
              <h2 className="text-centered text-accent text-thin t14">A FINE ART, PRINTMAKING, PHOTOGRAPHY & DESIGN STUDIO</h2>
            </div>}
          right={
            <div style={{ maxHeight: '100vh' }}>
              <img src="images/shell.jpeg" style={{ height: '100%', objectFit: 'cover', width: '100%', display: 'block', maxHeight: '100vh' }}></img>
            </div>}>
        </TwoColumn >
      </div>


    </>
  )
}
