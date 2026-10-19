import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

const JourneyApp = lazy(() => import('./JourneyApp'));
const useJourney = new URLSearchParams(window.location.search).has('journey');

/* For the curious few who open the console — a note left on the
   kitchen table. Attention is rewarded, quietly. */
if (typeof window !== 'undefined' && !import.meta.env.DEV) {
  const ink = 'color:#1C2B5E;font-size:15px;font-family:Georgia,serif;font-style:italic';
  const grey = 'color:#8F6B3F;font-size:12px;font-family:system-ui';
  // eslint-disable-next-line no-console
  console.log('%c〰  You looked closer. I like that already.', ink);
  // eslint-disable-next-line no-console
  console.log(
    '%cNIRANULA · The Narrative House — built with attention, not noise.\nIf you read this far, we probably think alike. → nivedhithar29@gmail.com',
    grey,
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {useJourney ? (
      <Suspense fallback={null}>
        <JourneyApp />
      </Suspense>
    ) : (
      <App />
    )}
  </StrictMode>,
);
