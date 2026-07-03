import Mark from '../components/Mark';
import { nav, profile } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section bg-navy text-shell pt-16 pb-10">
      <div className="wrap">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-8">
          <div>
            <Mark stacked className="items-start !flex-col" />
            <p className="mt-5 max-w-xs text-shell/60 text-sm leading-relaxed text-pretty">
              A narrative house for voices, ideas, and the stories that need room to breathe.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold mb-4">Explore</p>
            <ul className="space-y-2.5">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="link-underline text-shell/75 hover:text-shell text-sm">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold mb-4">Say hello</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="link-underline text-shell/75 hover:text-shell">
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="link-underline text-shell/75 hover:text-shell"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="text-shell/60">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-shell/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-shell/50 text-[0.78rem]">
            © {year} {profile.name} · {profile.brand} · {profile.house}
          </p>
          <p className="text-shell/40 text-[0.72rem] uppercase tracking-[0.18em]">
            Designed with attention, not noise.
          </p>
        </div>
      </div>
    </footer>
  );
}
