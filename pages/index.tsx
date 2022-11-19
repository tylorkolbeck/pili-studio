import Head from 'next/head'
import Text from '../components/typography/text/text.component'
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

      <section className={styles.twoColumn}>
        <div className={styles.heroLeft}>
          <div style={{ paddingTop: "25%" }}>
            <h2 className="text-centered text-accent text-thin t14">BONDED · TOGETHER · CONNECTED</h2>
            <div className={styles.gifWrapper}>
              <img className={styles.homeHero_Gif} src="videos/Pili-LandingGif-gold.gif" style={{ objectFit: 'contain', width: '100%' }}></img>
            </div>
            <h2 className="text-centered text-accent text-thin t14">A FINE ART, PRINTMAKING, PHOTOGRAPHY & DESIGN STUDIO</h2>
          </div>
        </div>
        <div>
          <div style={{ maxHeight: '100vh' }}>
            <img src="images/shell.jpeg" style={{ height: '100%', objectFit: 'cover', width: '100%', display: 'block', maxHeight: '100vh' }}></img>
          </div>
        </div>
      </section>
      <section className={styles.twoColumn}>
        <div className={styles.doubleImage}>
          <div><img src="/images/hibiscusmockup-2.jfif"></img></div>
          <div><img src="/images/AlohaLei-Umber-Closeup.jpg"></img></div>
        </div>
        <div className={styles.sectionTwoRight}>
          <div>
            <Text fontFamily='HVMuse' size={'3rem'} color='secondary' align="center">see</Text>
            <Text fontFamily='HVMuse' size={'5rem'} color='secondary' align="center">the art</Text>
          </div>
          <div style={{ display: 'flex', marginTop: '2rem' }}>
            <Text color='secondary' size=".9rem">PRINTMAKING</Text>
            <Text color='secondary' size=".9rem">&nbsp; — &nbsp; </Text>
            <Text color='secondary' size=".9rem"> PHOTOGRAPHY</Text>
          </div>
        </div>
      </section>
      <section className={styles.marketSchedule}>
        <div>
          <Text size="1.8rem" fontFamily='proxima-nova' color='light' styles={{ wordWrap: 'break-word', letterSpacing: '0.5rem', textUnderlineOffset: '0.2rem' }} bold center underline>MARKET</Text>
          <Text size="1.8rem" fontFamily='proxima-nova' color='light' styles={{ wordWrap: 'break-word', letterSpacing: '0.5rem', textUnderlineOffset: '0.2rem' }} bold center underline>SCHEDULE</Text>
        </div>
      </section>
    </>
  )
}
