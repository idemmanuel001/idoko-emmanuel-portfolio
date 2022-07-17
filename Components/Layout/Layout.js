import Footer from './Footer';
import Header from './Header';


export default function Layout({children}) {
  return (
    <main>
        <Header />
        {children}
        <Footer />
    </main>
  )
}
