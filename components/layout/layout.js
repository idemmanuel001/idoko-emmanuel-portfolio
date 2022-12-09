import Footer from './footer';
import Header from './header';
import Cursor from '../cursor';


export default function Layout({ children }) {
  return (
    <main>
      <Cursor />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
