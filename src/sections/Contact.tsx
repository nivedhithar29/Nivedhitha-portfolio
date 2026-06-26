import { useState, type FormEvent } from 'react';
import Reveal from '../components/Reveal';
import { WaveGlyph } from '../components/Mark';
import WaveBand from '../components/WaveBand';
import { contact, profile } from '../data/content';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s-7-5.4-7-11a7 7 0 1 1 14 0c0 5.6-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name || 'a new friend'}, via Niranula`);
    const body = encodeURIComponent(
      `${form.message}\n\n- ${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    'w-full bg-transparent border-b border-navy/20 py-3 text-navy placeholder:text-navy/35 focus:outline-none focus:border-terracotta transition-colors';

  return (
    <section id="contact" className="section relative pt-24 md:pt-36 pb-0 bg-shell overflow-hidden">
      <div className="wrap relative">
        <Reveal className="text-center mb-16 md:mb-24">
          <WaveGlyph className="w-16 mx-auto text-teal/80 mb-7" strokeWidth={2} />
          <h2 className="display t-h1 text-navy text-balance max-w-4xl mx-auto leading-[0.98]">
            {contact.headline}
          </h2>
          <p className="script text-3xl md:text-5xl mt-3">{contact.headlineAccent}</p>
          <p className="mt-8 max-w-xl mx-auto text-ink/70 leading-relaxed text-pretty">
            {contact.lead}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
          {/* form */}
          <Reveal>
            <form onSubmit={onSubmit} className="space-y-7">
              <div>
                <label className="eyebrow text-teal block mb-2">Your name</label>
                <input
                  className={field}
                  type="text"
                  required
                  placeholder="Who's saying hello?"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="eyebrow text-teal block mb-2">Email</label>
                <input
                  className={field}
                  type="email"
                  required
                  placeholder="where I can reach you"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="eyebrow text-teal block mb-2">The starting point</label>
                <textarea
                  className={`${field} resize-none`}
                  rows={3}
                  required
                  placeholder="Hi, I think I need help with…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-pill btn-dark">
                Send it over
                <span aria-hidden>→</span>
              </button>
            </form>
          </Reveal>

          {/* details + notes */}
          <Reveal delay={1} className="space-y-8">
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 text-navy hover:text-terracotta transition-colors"
              >
                <span className="grid place-items-center h-10 w-10 rounded-full border border-navy/15 group-hover:border-terracotta/40 transition-colors">
                  <MailIcon />
                </span>
                <span className="link-underline">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-4 text-navy hover:text-terracotta transition-colors"
              >
                <span className="grid place-items-center h-10 w-10 rounded-full border border-navy/15 group-hover:border-terracotta/40 transition-colors">
                  <PhoneIcon />
                </span>
                <span className="link-underline">{profile.phone}</span>
              </a>
              <div className="flex items-center gap-4 text-navy">
                <span className="grid place-items-center h-10 w-10 rounded-full border border-navy/15">
                  <PinIcon />
                </span>
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="space-y-5 pt-2">
              {contact.notes.map((n) => (
                <div key={n.title} className="rounded-2xl bg-white/55 border border-navy/10 p-5">
                  <h3 className="display text-lg text-terracotta mb-1.5">{n.title}</h3>
                  <p className="text-ink/70 text-[0.88rem] leading-relaxed text-pretty">{n.body}</p>
                </div>
              ))}
              <p className="script text-2xl text-terracotta/90 pl-1">
                p.s. travel? {profile.travel.toLowerCase()}
              </p>
            </div>
          </Reveal>
        </div>

        {/* wave finale — full-bleed across the viewport */}
        <Reveal className="mt-24 md:mt-32 relative left-1/2 right-1/2 -mx-[50vw] w-screen max-w-[100vw]">
          <div className="relative h-40 md:h-60 overflow-hidden">
            <WaveBand className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-shell/70" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
