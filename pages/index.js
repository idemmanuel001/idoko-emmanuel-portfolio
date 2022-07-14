import Head from 'next/head';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import AboutMe from '../Components/Sections/AboutMe';
import Herosection from '../Components/Sections/HeroSection';
import Projects from '../Components/Sections/Projects';
import ContactMe from '../Components/Sections/ContactMe';



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
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </main>


    </>
  );
}
