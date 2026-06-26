import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Approach from './sections/Approach';
import BehindLogo from './sections/BehindLogo';
import Work from './sections/Work';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Approach />
        <BehindLogo />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
