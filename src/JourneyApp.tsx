import { useEffect } from 'react';
import Nav from './components/Nav';
import SoundToggle from './components/SoundToggle';
import Cursor from './components/Cursor';
import Atmosphere from './components/Atmosphere';
import ScrollThread from './components/ScrollThread';
import JourneyStage from './components/JourneyStage';

export default function JourneyApp() {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <>
      <Atmosphere />
      <div className="grain" aria-hidden="true" />
      <ScrollThread />
      <Cursor />
      <Nav />
      <main>
        <JourneyStage />
        <section className="bg-shell py-24 md:py-36 text-center">
          <p className="eyebrow text-ink/40">Site content continues here</p>
        </section>
      </main>
      <SoundToggle />
    </>
  );
}
