import Reveal from './Reveal';

interface ChapterCardProps {
  no: string;
  name: string;
  country: string;
  context: string;
  line: string;
}

export default function ChapterCard({ no, name, country, context, line }: ChapterCardProps) {
  return (
    <Reveal className="py-12 md:py-16 flex flex-col items-center text-center">
      <span className="eyebrow text-gold-deep">{no} · {name}</span>
      <span className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/50 mt-1">{country}</span>
      <p className="script text-2xl md:text-3xl mt-4">{context}</p>
      <p className="display-italic text-navy text-lg md:text-xl max-w-lg mt-2 leading-snug text-balance">
        {line}
      </p>
    </Reveal>
  );
}
