import Nav from './components/Nav';
import Ticker from './components/Ticker';
import SoundToggle from './components/SoundToggle';
import Overture from './components/Overture';
import Atmosphere from './components/Atmosphere';
import Hero from './sections/Hero';
import About from './sections/About';
import Approach from './sections/Approach';
import BehindLogo from './sections/BehindLogo';
import Work from './sections/Work';
import Heritage from './sections/Heritage';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { tickerLines, tickerLinesAlt } from './data/content';

export default function App() {
  return (
    <>
      <Atmosphere />
      <div className="grain" aria-hidden="true" />
      <Overture />
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
        <Contact />
      </main>
      <Footer />
      <SoundToggle />
    </>
  );
}
