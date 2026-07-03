import Nav from './components/Nav';
import Ticker from './components/Ticker';
import SoundToggle from './components/SoundToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import Approach from './sections/Approach';
import BehindLogo from './sections/BehindLogo';
import Work from './sections/Work';
import Heritage from './sections/Heritage';
import Services from './sections/Services';
import Lister from './sections/Lister';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { tickerLines, tickerLinesAlt } from './data/content';

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Ticker lines={tickerLines} dark />
        <About />
        <Approach />
        <BehindLogo />
        <Work />
        <Heritage />
        <Ticker lines={tickerLinesAlt} reverse />
        <Services />
        <Lister />
        <Contact />
      </main>
      <Footer />
      <SoundToggle />
    </>
  );
}
