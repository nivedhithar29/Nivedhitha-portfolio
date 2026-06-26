/* ============================================================
   NIRANULA · content model
   Sourced from the NIRANULA · The Narrative House portfolio.
   ============================================================ */

export const profile = {
  brand: 'NIRANULA',
  house: 'The Narrative House',
  name: 'Nivedhitha Ravi',
  role: 'Story-led Communication Specialist',
  disciplines: ['Emotional Brand Strategy', 'Copywriting', 'Cultural Communication'],
  email: 'nivedhithar29@gmail.com',
  phone: '+91 8903586553',
  location: 'India, anywhere a story calls',
  travel: 'Happily. Especially if there is chai.',
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'approach', label: 'Approach' },
  { id: 'logo', label: 'The Mark' },
  { id: 'work', label: 'Work' },
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

export const pillars = [
  {
    no: '01',
    title: 'Emotional Brand Strategy',
    body: 'I start with the heart of the brand, the nervous, the wound, the north star, and shape that into a direction that feels aligned and grounded.',
    tone: 'navy',
  },
  {
    no: '02',
    title: 'Story-Driven Content Systems',
    body: 'I build content that flows like a narrative: connected, evolving, meaningful, never a template stretched across a calendar.',
    tone: 'teal',
  },
  {
    no: '03',
    title: 'Cultural + Market Understanding',
    body: 'I observe how people behave, what influences them, and the cultural shifts that quietly change everything.',
    tone: 'sage',
  },
  {
    no: '04',
    title: 'Founder Voice + Creative Copy',
    body: "I translate a founder's personality into words that feel like them, not like a template.",
    tone: 'terracotta',
  },
  {
    no: '05',
    title: 'AI-Aided Workflows',
    body: 'I use AI thoughtfully, as a tool to unlock research, cleaner structures and content that stays sharp without losing its humanity.',
    tone: 'amber',
  },
];

export const approach = {
  kicker: 'My Approach',
  lines: [
    'I work gently, but with clarity.',
    "I ask questions brands didn't know they needed to answer.",
    'I look for the story beneath the strategy, and the strategy beneath the story.',
    'Most of all, I listen, because every brand, no matter how big or messy or early, has something worth being said with intention.',
    "And that's what I help them find.",
  ],
};

export const logoMeanings = [
  { title: 'Lone Wave', body: 'A single, fluid line symbolising intuition, movement, and my "lone-wolf" creative energy.' },
  { title: 'Calm + Grounding', body: 'A steady centre to return to, the feeling of a held breath finally released.' },
  { title: 'Structure + Softness', body: 'Form with room to move; the discipline of a line that still knows how to bend.' },
  { title: 'Bridge of Meaning', body: 'The crossing between what is said and what is truly meant.' },
  { title: 'Pause + Breath', body: 'Space written into the rhythm, silence as part of the sentence.' },
  { title: 'Story Arc Unfolding', body: 'The rise and fall of a narrative finding its own natural shape.' },
  { title: 'Horizon Rising', body: 'A line that keeps reaching forward, quiet ambition, steadily kept.' },
  { title: 'Scorpio Stillness', body: 'Depth held beneath the surface; intensity that does not need to shout.' },
];

export const wordmark = {
  title: 'Wordmark',
  body: "Formed from my family's initials. A name anchored in home.",
  initials: [
    { letter: 'NI', who: 'Nivedhitha · Me', tone: 'navy' },
    { letter: 'RA', who: 'Ravi · My Naina', tone: 'teal' },
    { letter: 'NU', who: 'Anusuya · My Amma', tone: 'gold' },
    { letter: 'LA', who: 'Lavanyan · My Bro', tone: 'coral' },
  ],
  submark: 'A familiar place for voices, ideas, and the stories that need room to breathe.',
};

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
    accent: 'teal',
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
    accent: 'terracotta',
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
    accent: 'cobalt',
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
    accent: 'sage',
    summary:
      'Optimised the Maranello online store, handling product-sheet writing and ensuring an SEO-sound catalog structure with real on-page clarity.',
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
    accent: 'amber',
    summary:
      'A nostalgia-driven, emotion-led founder story connecting childhood memory, community ritual and clean-beauty innovation for an India-brand series.',
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

export const services = [
  {
    name: "Founder's Therapy™",
    tag: 'Signature',
    desc: 'A 90–120 minute emotional strategy deep-dive where we untangle your story, name what you actually do, and find the words that finally feel like you.',
    price: '₹4,500 – ₹8,500',
    unit: 'per session',
    accent: 'terracotta',
  },
  {
    name: 'Brand & Campaign Concepts',
    tag: 'Direction',
    desc: 'Culturally-conscious ideas, moodboards, platform concepts, micro-campaign stories and founder-led content POVs.',
    price: '₹15,000 – ₹30,000',
    unit: 'per concept',
    accent: 'navy',
  },
  {
    name: 'Brand Voice + Copywriting',
    tag: 'Words',
    desc: 'Tone development, website copy, product descriptions, microcopy and narrative systems built around the brand\'s emotional core.',
    price: '₹5,000 – ₹8,500',
    unit: 'per page',
    accent: 'teal',
  },
  {
    name: 'SEO Content Writing',
    tag: 'Reach',
    desc: 'Intent-led, research-backed articles that blend storytelling with SEO, content to rank, resonate and build long-term brand authority.',
    price: '₹3,500 – ₹5,500',
    unit: 'per article',
    accent: 'sage',
  },
  {
    name: 'Email Marketing',
    tag: 'Add-on',
    desc: 'Human, narrative email flows designed to nurture, convert and emotionally connect, with a voice that sounds like a person, not a funnel.',
    price: '₹1,000+',
    unit: 'per email / flow',
    accent: 'amber',
  },
];

export const contact = {
  headline: "Say hello, I don't bite.",
  headlineAccent: 'Unless the copy is bad.',
  lead: "I'd love to hear from you, whether it's a project, a question, or a quiet idea you're exploring.",
  notes: [
    {
      title: 'If you\'re not sure where to start',
      body: 'Just send me: “Hi, I think I need help with…” and we\'ll figure it out together.',
    },
    {
      title: 'Response time',
      body: 'Varies by service and brand depth. But when I reply, it\'s with full focus (and a movie-level background score I pretend no one hears).',
    },
    {
      title: 'A small note',
      body: "You don't need a perfect brief. You just need a starting point. I'll help shape the rest.",
    },
  ],
};
