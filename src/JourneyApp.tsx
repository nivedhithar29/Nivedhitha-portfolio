import Nav from './components/Nav';
import SoundToggle from './components/SoundToggle';
import Cursor from './components/Cursor';
import Atmosphere from './components/Atmosphere';
import ScrollThread from './components/ScrollThread';
import ChapterCard from './components/ChapterCard';
import JourneyProgress from './components/JourneyProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Approach from './sections/Approach';
import BehindLogo from './sections/BehindLogo';
import Work from './sections/Work';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { heritage } from './data/content';

export default function JourneyApp() {
  const [trichy, salem, milano, chennai] = heritage.places;

  return (
    <>
      <Atmosphere />
      <div className="grain" aria-hidden="true" />
      <ScrollThread />
      <Cursor />
      <Nav />
      <JourneyProgress />
      <main>
        {/* ── 01 · Trichy ── Hero + About ── */}
        <section id="chapter-trichy" aria-label="Trichy" className="pt-20 md:pt-24">
          <ChapterCard {...trichy} />
          <Hero />
          <About />
        </section>

        {/* ── 02 · Salem ── Approach ── */}
        <section id="chapter-salem" aria-label="Salem">
          <ChapterCard {...salem} />
          <Approach />
        </section>

        {/* ── 03 · Milano ── The Mark + Work ── */}
        <section id="chapter-milano" aria-label="Milano">
          <ChapterCard {...milano} />
          <BehindLogo />
          <Work />
        </section>

        {/* ── 04 · Chennai ── Services + Contact ── */}
        <section id="chapter-chennai" aria-label="Chennai">
          <ChapterCard {...chennai} />
          <Services />
          <Contact />
        </section>
      </main>
      <Footer />
      <SoundToggle />
    </>
  );
}
