import Footer from './Footer';
import Header from './Header';
import Cursor from '../Cursor';


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
