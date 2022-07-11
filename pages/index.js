import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="frontend developer" />
        <meta name="description" content="frontend developer portfolio website" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <main>
     <Header />
      </main>

      
    </>
  )
}
