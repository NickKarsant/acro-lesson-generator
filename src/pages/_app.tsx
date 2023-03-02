import '@/styles/globals.css'
import Layout from '../components/Layout'
import Header from '../components/Header'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout >
  )
}
