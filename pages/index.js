import Head from 'next/head'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Herosection from '../Components/Sections/HeroSection';



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="idoko emmanuel frontend developer portfolio website" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>
     <Header />
    <Herosection />
     <Footer />
      </main>

      
    </>
  )
}
