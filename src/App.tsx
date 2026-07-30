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
import { tickerLines } from './data/content';

export default function App() {
  return (
    <>
      <Atmosphere />
      <div className="grain" aria-hidden="true" />
      <Overture />
      <Nav />
      {/*
        Room sequence follows the emotional arc, not portfolio categories
        (blueprint §5): recognition before proof.
        Hero → About → Heritage → Approach → The Mark → Services → Work → Contact.
        A single, confident identity marquee sits between the threshold and
        About as ambient texture — the other two were retired.
      */}
      <main>
        <Hero />
        <Ticker lines={tickerLines} dark />
        <About />
        <Heritage />
        <Approach />
        <BehindLogo />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
      <SoundToggle />
    </>
  );
}
