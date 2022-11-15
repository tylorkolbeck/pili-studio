import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pili Studio</title>
        <meta name="description" content="A Fine Art, Printmaking, Photography & Design Studio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jop7hyo.css"></link>
      </Head>

      <main className={styles.main}>
        <p>This should be proxima nova</p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
