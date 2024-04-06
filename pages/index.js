import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Le Comparateur Mariage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe
          src="https://gamma.app/embed/dx6ffp881ka6p3t"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          allow="FullScreen"
        ></iframe>
      </main>

      <Footer />
    </div>
  )
}
