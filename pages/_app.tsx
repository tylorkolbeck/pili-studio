import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/main/main.layout'

// component prop is the active page
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
