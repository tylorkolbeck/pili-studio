import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/HVMuse/HV-Muse-Regular.woff2"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        {/* <link
          rel="preload"
          href="/fonts/ProximaNova-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}