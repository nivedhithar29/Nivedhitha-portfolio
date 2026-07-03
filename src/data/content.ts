/* ============================================================
   NIRANULA · content model
   Sourced from the NIRANULA portfolio + Website Redesign Brief v3.1.
   ============================================================ */

export const profile = {
  brand: 'NIRANULA',
  house: 'The Narrative House',
  name: 'Nivedhitha Ravi',
  nickname: 'Nivi',
  role: 'Story-led Communication Specialist',
  disciplines: ['Emotional Brand Strategy', 'Copywriting', 'Cultural Communication'],
  email: 'nivedhithar29@gmail.com',
  phone: '+91 8903586553',
  location: 'Chennai, India · anywhere a story calls',
};

export const hero = {
  intro: "Hi, I'm Nivedhitha. You can call me Nivi.",
  line: 'A place where brands are not built louder, but truer.',
};

/* Scrolling ticker, identity lines moving across the page */
export const tickerLines = [
  'Not louder, but truer',
  'Story-led by nature',
  'Strategy beneath the story',
  'Gentle, but clear',
  'The Narrative House',
];

export const tickerLinesAlt = [
  'Emotional brand strategy',
  'Founder voice + creative copy',
  'Cultural + market understanding',
  'Chennai · Milan · anywhere a story calls',
  'Open to international travel',
];

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'approach', label: 'Approach' },
  { id: 'logo', label: 'The Mark' },
  { id: 'work', label: 'Work' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  kicker: 'a little about me',
  lead: "Not just to what it means, but to what it feels, and what it's trying (sometimes awkwardly) to become.",
  body: [
    'I work at the intersection of story, culture and strategy.',
    'I help brands find emotional clarity in the way they communicate, in a way that feels human, honest and true to who they are.',
    "I'm not loud. I'm not flashy. I don't believe in over-polish or pretense. I believe in attention.",
  ],
  signature: 'Story-led Communication Specialist',
};

/* How I think & work. Each pillar opens with a real moment, not a label. */
export const pillars = [
  {
    no: '01',
    title: 'Emotional Brand Strategy',
    story:
      'A founder once told me: "I know what we do. I just don\'t know how to say it without sounding like everyone else." That\'s where I start. Not with your tagline. With the feeling underneath it.',
    body: 'I start with the heart of the brand, the nervous, the wound, the north star, and shape that into a direction that feels aligned and grounded.',
  },
  {
    no: '02',
    title: 'Story-Driven Content Systems',
    story:
      "One post doesn't build a brand. But one thread, followed consistently over six months, with a clear emotional spine, that does. I build the spine.",
    body: 'I build content that flows like a narrative: connected, evolving, meaningful, never a template stretched across a calendar.',
  },
  {
    no: '03',
    title: 'Cultural + Market Understanding',
    story:
      'When d\'you launched their unscripted reality series, they didn\'t just need a post. They needed someone who understood why "unfiltered" was the right word for that exact cultural moment in Indian skincare. Context is strategy.',
    body: 'I observe how people behave, what influences them, and the cultural shifts that quietly change everything.',
  },
  {
    no: '04',
    title: 'Founder Voice + Creative Copy',
    story:
      'You know that feeling when you read something and think: that sounds exactly like me, only better? That\'s the goal. Not my voice. Yours, but cleaner.',
    body: "I translate a founder's personality into words that feel like them, not like a template.",
  },
  {
    no: '05',
    title: 'AI-Aided Workflows',
    story:
      'I use AI the way a good researcher uses a library. It helps me find things faster. The thinking, and the feeling, still happens in the room.',
    body: 'I use AI thoughtfully, as a tool to unlock research, cleaner structures and content that stays sharp without losing its humanity.',
  },
];

export const approach = {
  kicker: 'My Approach',
  lines: [
    "I ask the questions you've been avoiding.",
    "Not because they're hard, but because no one else stopped long enough to ask them.",
    "I work gently. But I don't let you stay comfortable in vagueness.",
    'Because the story you keep saying "I\'ll figure out later", that\'s the one your audience is waiting for.',
    'This is how I work.',
    'Slowly at first. Then very quickly.',
  ],
};

export const logoMeanings: { title: string; body: string; episode?: string }[] = [
  {
    title: 'Lone Wave',
    body: 'A single, fluid line symbolising intuition, movement, and my "lone-wolf" creative energy.',
  },
  {
    title: 'Calm + Grounding',
    body: 'A steady centre to return to, the feeling of a held breath finally released.',
  },
  {
    title: 'Structure + Softness',
    body: 'Form with room to move; the discipline of a line that still knows how to bend.',
  },
  {
    title: 'Bridge of Meaning',
    body: 'The crossing between what is said and what is truly meant.',
  },
  {
    title: 'Pause + Breath',
    body: 'Space written into the rhythm, silence as part of the sentence.',
  },
  {
    title: 'Story Arc Unfolding',
    body: 'The rise and fall of a narrative finding its own natural shape.',
  },
  {
    title: 'Horizon Rising',
    body: 'A line that keeps reaching forward, quiet ambition, steadily kept.',
  },
  {
    title: 'Scorpio Stillness',
    body: 'Depth held beneath the surface; intensity that does not need to shout.',
    episode:
      'The Southwave founder told me the post was exactly right. I had rewritten it four times before sending it. No one knew that. That\'s Scorpio Stillness.',
  },
];

export const wordmark = {
  title: 'Wordmark',
  body: "Formed from my family's initials. A name anchored in home.",
  initials: [
    { letter: 'NI', who: 'Nivedhitha · Me', tone: 'blush' },
    { letter: 'RA', who: 'Ravi · My Naina', tone: 'sky' },
    { letter: 'NU', who: 'Anusuya · My Amma', tone: 'gold' },
    { letter: 'LA', who: 'Lavanyan · My Bro', tone: 'coral' },
  ],
  submark: 'A familiar place for voices, ideas, and the stories that need room to breathe.',
};

/* Impact numbers, real work, real reach */
export const impactStats = [
  { no: 'one', value: '3M+', label: 'views on a single insight graphic' },
  { no: 'two', value: '#1', label: 'most-read Fashionbi report of the year' },
  { no: 'three', value: '3', label: 'international markets mapped for compliance' },
  { no: 'four', value: '8+', label: 'brands across India and Italy' },
];

export const projects = [
  {
    id: 'fashionbi',
    name: 'Fashionbi',
    location: 'Milan, Italy · Remote',
    roles: 'Trend Researcher · Insights Writer · Content Strategist',
    accent: 'navy',
    summary:
      'Led annual trend and performance analysis for Giorgio Armani / Emporio Armani Ristorante, writing SEO/AEO-friendly weekly insights and flash news across Fashionbi media.',
    impact: [
      'Insights cited inside Google snippets, ChatGPT inline references and trend round-ups.',
      'My report “The Luxury × Sportswear Fashion Ludo” became the #1 most-read piece (Index 100), shared by the Chief eBusiness Officer of Valentino.',
      'A Story Kids insight graphic went viral on X, 3M+ views, 1.7K likes, 900+ reposts, amplifying Fashionbi\'s cultural reach.',
    ],
    metric: { value: '3M+', label: 'views on a single insight' },
  },
  {
    id: 'dhpl',
    name: 'DHPL Group',
    location: 'Chennai, India',
    roles: 'Research Strategist · AI Ops · Compliance Writer',
    accent: 'gold',
    summary:
      'Strategic research and market regulation support across i+Yashae (US), Hair & Compounds (US) and DHPL Group, building workflows for research, SEO, documentation and operations.',
    impact: [
      'Compliance mapping across EU, US and Canada with audit-ready content systems.',
      'SEO / AEO / GEO keyword audits, metadata and internal linking architecture.',
      'Authored a company-wide “How to Prompt” guide adopted across teams.',
    ],
    metric: { value: '3', label: 'markets mapped for compliance' },
  },
  {
    id: 'salt',
    name: 'Salt Studio',
    location: 'Cochin, India',
    roles: 'Branding · Marketing · Social Strategy',
    accent: 'navy',
    summary:
      'Built brand partnerships and collaborations with celebrities and influencers, elevating social engagement through aligned, emotionally legible content.',
    impact: [
      'Introduced Linktree optimisation, the first one-tap online orders via Instagram.',
      'Streamlined e-commerce product alignment and supported email-marketing-led PR.',
      'Helped introduce a “Shop the Look” category on the website.',
    ],
    metric: { value: '1-tap', label: 'orders, first time live' },
  },
  {
    id: 'studiouno',
    name: 'Studio Uno Records',
    location: 'Chennai, India',
    roles: 'Social Media · Web Optimisation · SEO',
    accent: 'gold',
    summary:
      'Crafted the content strategy for a music studio, scheduling and optimising posts, sharpening the brand\'s social presence and SEO foundations.',
    impact: [
      'Improved visibility and a clearer content structure.',
      'Stronger, warmer community interaction.',
      'SEO-optimised website content end to end.',
    ],
    metric: { value: '↑', label: 'visibility & community' },
  },
  {
    id: '247',
    name: '247 Group',
    location: 'Milan, Italy · Remote',
    roles: 'SEO Writer · Catalog Specialist',
    accent: 'navy',
    summary:
      'Optimised the Macondo online store, handling product-sheet writing and ensuring an SEO-sound catalog structure with real on-page clarity.',
    impact: [
      'Higher on-page clarity across the catalog.',
      'Improved organic performance.',
      'Enhanced content accuracy and SEO foundations.',
    ],
    metric: { value: 'SEO', label: 'catalog rebuilt for search' },
  },
  {
    id: 'keypost',
    name: 'Key Posts',
    location: 'India · Founder-led series',
    roles: 'Narrative Content · Founder Voice',
    accent: 'gold',
    summary:
      'A nostalgia-driven, emotion-led founder story connecting childhood memory, community ritual and clean-beauty innovation for the Indie Brand Series.',
    impact: [
      'The founder responded publicly, reinforcing a deep brand–audience connection.',
      'Positioned the brand as rooted, global and culturally aware.',
      'Sparked high engagement and conversation around brand identity.',
    ],
    metric: { value: 'Viral', label: 'founder-led storytelling' },
  },
];

export const experiences = [
  { name: 'Fashionbi', place: 'Milan, IT · Remote', tag: 'Trend & Insights' },
  { name: 'Valentino', place: 'Milan, IT', tag: 'Luxury Media' },
  { name: 'Valextra', place: 'Milan, IT', tag: 'Brand' },
  { name: '247 Group', place: 'Milan, IT · Remote', tag: 'SEO & Catalog' },
  { name: 'Studio Uno Records', place: 'Chennai, IN', tag: 'Social & SEO' },
  { name: 'Different Hair', place: 'Chennai, IN', tag: 'Strategy' },
  { name: 'DHPL Group', place: 'Chennai, IN', tag: 'Research & Ops' },
  { name: 'Salt Studio', place: 'Cochin, IN', tag: 'Branding' },
];

/* Heritage, the story across places. Horizontal, collage-style. */
export const heritage = {
  kicker: 'where the story comes from',
  title: 'Trichy. Salem. Milano. Chennai.',
  places: [
    {
      no: '01',
      name: 'Trichy',
      country: 'Tamil Nadu, India',
      line: 'Where I learned that a story told slowly is still worth telling.',
    },
    {
      no: '02',
      name: 'Salem',
      country: 'Tamil Nadu, India',
      line: 'The rhythm between Trichy and the world. The city that shaped my pace.',
    },
    {
      no: '03',
      name: 'Milano',
      country: 'Lombardy, Italy',
      line: "Where I learned that beauty is not decoration. It's intention made visible.",
    },
    {
      no: '04',
      name: 'Chennai',
      country: 'Tamil Nadu, India',
      line: 'Where it all comes together. Where NIRANULA lives.',
    },
  ],
  note: "Open to travel, internationally too, especially if there's a sukku coffee at the end of it.",
};

/* Services. Emotional entry point first, no pricing, enquire CTAs. */
export const services = [
  {
    name: "Founder's Therapy™",
    tag: 'Signature',
    entry:
      'You know your brand better than anyone. And somehow, when you sit down to explain it, nothing comes out right. This session is for that gap.',
    detail:
      'A 90–120 minute emotional strategy deep-dive where we untangle your story, name what you actually do, and find the words that finally feel like you.',
    cta: "Let's talk about this",
  },
  {
    name: 'Brand & Campaign Concepts',
    tag: 'Direction',
    entry: "You have an idea. It's good. You just can't quite shape it into something you'd show the world. Yet.",
    detail:
      'Culturally-conscious ideas, moodboards, platform concepts, micro-campaign stories and founder-led content POVs.',
    cta: 'Enquire',
  },
  {
    name: 'Brand Voice + Copywriting',
    tag: 'Words',
    entry:
      'Every time you read your own website, something feels slightly off. Not wrong. Just... not quite you.',
    detail:
      "Tone development, website copy, product descriptions, microcopy and narrative systems built around the brand's emotional core.",
    cta: "Let's talk about this",
  },
  {
    name: 'SEO Content Writing',
    tag: 'Reach',
    entry:
      "You want to be found. But you don't want to sound like you were written by someone who's never met you.",
    detail:
      'Intent-led, research-backed articles that blend storytelling with SEO, content to rank, resonate and build long-term brand authority.',
    cta: 'Enquire',
  },
  {
    name: 'Email Marketing',
    tag: 'Add-on',
    entry: 'Your subscribers opened your email. Now what? This is the work of making that moment matter.',
    detail:
      'Human, narrative email flows designed to nurture, convert and emotionally connect, with a voice that sounds like a person, not a funnel.',
    cta: 'Enquire',
  },
];

/* The Lister, a clean typographic section */
export const lister = {
  title: 'What I do.',
  items: [
    "Founder's Therapy™",
    'Brand & Campaign Concepts',
    'Brand Voice + Copywriting',
    'SEO Content Writing',
    'Email Marketing',
    'Editorial Storytelling',
    'Cultural Brand Research',
    'Creative Direction (by conversation)',
  ],
  outro: 'Not everything. Just what matters.',
};

export interface ContactNote {
  title: string;
  body: string;
  hoverNote?: string;
  cinematic?: boolean;
}

export const contact = {
  headline: "Say hello. I don't bite.",
  headlineAccent: 'Unless the copy is bad.',
  lead: "I'd love to hear from you, whether it's a project, a question, or a quiet idea you're exploring.",
  notes: [
    {
      title: "If you're not sure where to start",
      body: 'Just send me: “Hi, I think I need help with…” and we\'ll figure it out together.',
    },
    {
      title: 'Response time',
      body: 'Varies by service and brand depth. But when I reply, it\'s with full focus (and a movie-level background score I pretend no one hears).',
      hoverNote: "(yes, that's what's playing while I read your email.)",
      cinematic: true,
    },
    {
      title: 'A small note',
      body: "You don't need a perfect brief. You just need a starting point. I'll help shape the rest.",
    },
  ] as ContactNote[],
  ps: "p.s. Want to travel to see you and your brand? Happily. Especially if there's a mint ice cream or a sukku coffee involved.",
  psNote: 'open to international travel',
};
