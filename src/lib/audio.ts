/* ============================================================
   NIRANULA · sound
   Everything is synthesised with the Web Audio API, so the site
   ships zero audio binaries and the ocean never stops to buffer.

   - ocean: looping filtered noise with slow swells (ambient bed)
   - swell: a 2–3 s cinematic orchestral rise for the contact hover
   Audio starts muted; browsers require a user gesture anyway.
   ============================================================ */

let ctx: AudioContext | null = null;

let oceanMaster: GainNode | null = null;
let oceanRunning = false;
let oceanOn = false;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!ctx) {
    const AC: typeof AudioContext | undefined =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') {
    void ctx.resume().catch(() => undefined);
  }
  return ctx;
}

/** Seconds of seamless brown-ish noise, the raw material of surf. */
function makeNoiseBuffer(ac: AudioContext, seconds = 4): AudioBuffer {
  const rate = ac.sampleRate;
  const buffer = ac.createBuffer(1, rate * seconds, rate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.5;
  }
  return buffer;
}

function buildOcean(ac: AudioContext) {
  oceanMaster = ac.createGain();
  oceanMaster.gain.value = 0;
  oceanMaster.connect(ac.destination);

  // two staggered noise layers so the swells overlap like real surf
  const layers = [
    { lfoFreq: 0.085, lfoPhase: 0, base: 420, depth: 260, vol: 0.6 },
    { lfoFreq: 0.052, lfoPhase: 2.4, base: 240, depth: 140, vol: 0.45 },
  ];

  for (const layer of layers) {
    const src = ac.createBufferSource();
    src.buffer = makeNoiseBuffer(ac);
    src.loop = true;

    const filter = ac.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = layer.base;
    filter.Q.value = 0.6;

    const layerGain = ac.createGain();
    layerGain.gain.value = layer.vol * 0.5;

    // slow LFO opens the filter and lifts the gain, a wave rolling in
    const lfo = ac.createOscillator();
    lfo.frequency.value = layer.lfoFreq;

    const lfoToFilter = ac.createGain();
    lfoToFilter.gain.value = layer.depth;
    lfo.connect(lfoToFilter);
    lfoToFilter.connect(filter.frequency);

    const lfoToGain = ac.createGain();
    lfoToGain.gain.value = layer.vol * 0.28;
    lfo.connect(lfoToGain);
    lfoToGain.connect(layerGain.gain);

    src.connect(filter);
    filter.connect(layerGain);
    layerGain.connect(oceanMaster);

    src.start(ac.currentTime + layer.lfoPhase * 0.1);
    lfo.start();
  }

  oceanRunning = true;
}

/** Fade the ambient ocean in or out. Returns the resulting state. */
export function setOcean(on: boolean): boolean {
  const ac = getCtx();
  if (!ac) return false;
  if (!oceanRunning) buildOcean(ac);
  if (!oceanMaster) return false;

  const now = ac.currentTime;
  oceanMaster.gain.cancelScheduledValues(now);
  oceanMaster.gain.setValueAtTime(oceanMaster.gain.value, now);
  oceanMaster.gain.linearRampToValueAtTime(on ? 0.16 : 0, now + (on ? 2.2 : 1.1));
  oceanOn = on;
  return oceanOn;
}

export function isOceanOn(): boolean {
  return oceanOn;
}

let swellPlaying = false;

/** A soft 2–3 second cinematic orchestral swell, then a fade. */
export function playSwell(): void {
  const ac = getCtx();
  if (!ac || swellPlaying) return;
  swellPlaying = true;

  const now = ac.currentTime;
  const master = ac.createGain();
  master.gain.value = 0.0001;
  master.connect(ac.destination);

  // D minor-ish swell: D3 · A3 · D4 · F4 · A4, strings-adjacent timbre
  const notes = [146.83, 220.0, 293.66, 349.23, 440.0];
  const oscs: OscillatorNode[] = [];

  notes.forEach((freq, i) => {
    const osc = ac.createOscillator();
    osc.type = i % 2 === 0 ? 'sawtooth' : 'triangle';
    osc.frequency.value = freq;
    // slight detune so it shimmers like a section, not a synth
    osc.detune.value = (i - 2) * 4;

    const filter = ac.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, now);
    filter.frequency.linearRampToValueAtTime(1400, now + 1.9);
    filter.frequency.linearRampToValueAtTime(360, now + 3.1);

    const g = ac.createGain();
    g.gain.value = i === 0 ? 0.16 : 0.09;

    osc.connect(filter);
    filter.connect(g);
    g.connect(master);
    osc.start(now);
    osc.stop(now + 3.4);
    oscs.push(osc);
  });

  // the swell: rise for ~2 s, hold a breath, fade
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.11, now + 1.9);
  master.gain.setValueAtTime(0.11, now + 2.3);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 3.3);

  oscs[0].onended = () => {
    master.disconnect();
    swellPlaying = false;
  };
}
