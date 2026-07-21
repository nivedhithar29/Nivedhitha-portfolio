/* ============================================================
   NIRANULA · content model
   Sourced from the NIRANULA portfolio + Redesign Brief v3.1
   + live-site developer change list.
   Multi-line strings preserve intentional line breaks; render
   them with `whitespace-pre-line`.
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
  // The "Hi, I'm Nivedhitha" intro lives in About now, not the hero.
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
  hi: "Hi, I'm Nivedhitha. You can call me Nivi.",
  kicker: 'a little about me',
  // Quiet monologue. Each entry is a stanza; blank lines between stanzas.
  body: [
    'I notice things.\nProbably more than I should.',
    'The sentence a founder repeats three times.\nThe review everyone skips because it’s too long.\nThe customer who says,\n“I can’t explain it... it just felt right.”',
    'Those are the moments I pay attention to.',
    'Because I’ve realised brands rarely struggle because they lack ideas.\nThey struggle because somewhere between what they mean...\nand what people experience...\nsomething gets lost.',
    'That’s the part I like untangling.',
    'I spend an unreasonable amount of time listening.\nTo founders.\nTo culture.\nTo conversations.\nTo the awkward sentence someone says halfway through a meeting\nthat accidentally explains the entire business.',
    'That’s usually where the real strategy lives.\nThe rest is just helping people hear it too.',
  ],
  signature: 'Story-led Communication Specialist',
};

/* How I think & work
   Left column: the Southwave anchor + an intro on what shaped the work.
   Right column: five practices, each in a spoken, unhurried voice. */
export const approach = {
  anchor:
    'The Southwave founder told me the post was exactly right.\nI had rewritten it four times before sending it.\nNo one knew that.\nThat’s how I work.',
  intro: [
    'A few things I’ve learned by paying attention.',
    'Every project has changed the way I think.',
    'Working at Fashionbi taught me that trends are rarely just trends.\nThey’re reflections of culture, behaviour, and shifting identities.',
    'At DHPL, I realised strategy isn’t only about markets, research,\nor international expansion.\nIt’s about understanding who a business is becoming\nbefore deciding how it should communicate.',
    'Working with brands like d’you, Southwave, Studio Uno, Salt Studio,\nand studying brands like Valentino reminded me\nthat people don’t remember the loudest story.\nThey remember the truest one.',
    'Those experiences eventually became the way I work.',
  ],
};

export const pillars = [
  {
    no: '01',
    title: 'Emotional Brand Strategy',
    body: 'One of the biggest lessons I took from DHPL\ncame from working on research-heavy projects.\nOn paper, it was about international markets,\nsupplier ecosystems, and compliance.\nIn reality, it always came back to one question:\n“Who are we trying to become?”\n\nThat’s still where I begin.\nBefore messaging.\nBefore positioning.\nBefore content.\n\nBecause the strongest brands don’t start with communication.\nThey start with clarity.',
  },
  {
    no: '02',
    title: 'Story-Led Content Systems',
    body: 'At Fashionbi, I wasn’t writing isolated articles.\nOne week it was Giorgio Armani.\nAnother week it was luxury and sports.\nThen it was beauty, consumer behaviour, or digital culture.\nEvery piece became part of a larger conversation.\n\nThat’s why I don’t build content calendars.\nI build narrative systems.\n\nBecause people rarely remember individual posts.\nThey remember patterns.',
  },
  {
    no: '03',
    title: 'Culture & Consumer Behaviour',
    body: 'Working on brands like d’you taught me\nthat products aren’t always the story.\nCulture is.\n\nWhen The Base Camp launched,\nwhat interested me wasn’t the campaign itself.\nIt was why it felt so relevant at that particular moment.\nPeople weren’t looking for polished founders anymore.\nThey were looking for honesty.\n\nThat’s why I spend so much time paying attention to\nfashion, internet culture, films, cafés, comment sections,\nand everyday conversations.\n\nTrends change quickly.\nHuman behaviour changes much more slowly.',
  },
  {
    no: '04',
    title: 'Founder Voice & Creative Copy',
    body: 'Whether I was writing about Southwave, Studio Uno, or Salt Studio,\nI realised something.\nNo founder actually wants prettier copy.\nThey want language that finally sounds like them.\n\nThat’s the part I enjoy most.\nListening long enough to notice what makes someone different...\nand making sure the brand sounds like it couldn’t have been\nwritten for anyone else.',
  },
  {
    no: '05',
    title: 'AI-Aided Research & Thinking',
    body: 'AI has become one of my favourite collaborators.\nNot because it replaces thinking.\nBecause it gives me more time for it.\n\nAt DHPL, I used it to support international research,\ncompliance documentation, SEO,\nsupplier verification, and internal workflows.\n\nToday, I use it the same way.\nTo research faster.\nSpot patterns sooner.\nAsk better questions.\n\nThe technology helps me organise information.\nThe story still comes from people.',
  },
];

/* My Approach manifesto. "Actually..." gets its own breath. */
export const manifesto = {
  kicker: 'My Approach',
  stanzas: [
    'I don’t usually begin by asking,\n“Who’s your target audience?”\nI usually ask,\n“When did this stop feeling like you?”',
    'Because that’s a much more interesting conversation.',
    'Sometimes the answer is the website.\nSometimes it’s the messaging.\nSometimes it’s a founder who’s been trying to sound “professional” for so long...\nthey’ve forgotten how they naturally speak.',
    'That’s my favourite kind of puzzle.\nNot because it’s broken.\nBecause it’s already there.\nWe just have to uncover it.',
    'I don’t believe clarity appears because someone hands you a framework.\nI think it arrives halfway through a conversation.\nUsually the one that starts with,',
  ],
  beat: 'Actually...',
  close:
    'That’s the moment I’m waiting for.\nBecause that’s where strategy stops sounding like strategy...\nand starts sounding like truth.',
};

export const logoMeanings: { title: string; body: string }[] = [
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
    // Scorpio Stillness — the story now anchors "How I Think & Work".
    title: 'Scorpio Stillness',
    body: 'Depth held beneath the surface; intensity that does not need to shout.',
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

/* Impact numbers, corrected against the portfolio PDF */
export const impactStats = [
  { no: 'one', value: '314K+', label: 'views on a Stray Kids insight graphic on X' },
  { no: 'two', value: '#1', label: 'most-read piece on Fashionbi (Index 100)' },
  { no: 'three', value: '3', label: 'markets mapped for compliance · EU · US · Canada' },
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
      'Led annual trend and social performance analysis for Giorgio Armani / Emporio Armani Ristorante, writing SEO/AEO-friendly weekly insights and flash news across Fashionbi media.',
    impact: [
      'A Stray Kids insight graphic went viral on X, 314K+ views, 1.7K likes, 900+ reposts.',
      'The report "The Luxury × Sportswear Fashion Ludo" became the #1 most-read piece (Index 100), shared by Andrea Cappi, then Chief eBusiness Officer of Valentino.',
      'Insights cited in Google Snippets, ChatGPT inline references and trend round-ups.',
    ],
    metric: { value: '314K+', label: 'views on a single insight' },
  },
  {
    id: 'dyou',
    name: 'd’you',
    location: 'Chennai, India',
    roles: 'Indie Brand Series · LinkedIn Collaboration',
    accent: 'gold',
    summary:
      'Wrote the emotional narrative for the launch of d’you’s five-year unscripted reality series, "in d’you time" — a story that made people feel the brand became a person, not a product.',
    impact: [
      'Brand team: "So thoughtfully written — a delightful way to describe d’you."',
      'Drew international interest — MinMaxDeals LLC (California) approached via the comments.',
      'Performance: 3,328+ impressions · 42 reactions · 31 comments.',
    ],
    metric: { value: '3.3K+', label: 'impressions on the launch story' },
  },
  {
    id: 'southwave',
    name: 'Southwave',
    location: 'Cochin, India',
    roles: 'Indie Brand Series · LinkedIn Feature',
    accent: 'navy',
    summary:
      'Captured Southwave’s beach-born identity — rust, waves, wind, craft and memory — telling their story exactly as they had been building it.',
    impact: [
      'Founder: "You told our story exactly as we’ve been building it — real and rooted."',
      'A quiet, rooted feature that resonated with their community.',
      'Performance: 1,530+ impressions · 48 likes · 22 comments · 3 shares.',
    ],
    metric: { value: '1.5K+', label: 'impressions, real and rooted' },
  },
  {
    id: 'dhpl',
    name: 'DHPL Group',
    location: 'Chennai, India',
    roles: 'Research Strategist · AI Ops · Compliance Writer',
    accent: 'gold',
    summary:
      'Strategic research and market-regulation support across i+Yashae (US), Hair & Compounds (US) and DHPL Group, building workflows for research, SEO, documentation and operations.',
    impact: [
      'Compliance mapping across EU, US and Canada with audit-ready content systems.',
      'SEO / AEO / GEO keyword audits, metadata and internal linking architecture.',
      'Authored a company-wide "How to Prompt" guide adopted across teams.',
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
      'Introduced Linktree optimisation — the first one-tap online orders via Instagram.',
      'Supported email-marketing-led PR and e-commerce product alignment.',
      'Introduced a "Shop the Look" category on the website.',
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
      'Crafted the content strategy for a music studio, scheduling and optimising posts, sharpening the brand’s social presence and SEO foundations.',
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

/* Heritage, the story across places. Personal context sits above the poetic line. */
export const heritage = {
  kicker: 'where the story comes from',
  title: 'Trichy. Salem. Milano. Chennai.',
  places: [
    {
      no: '01',
      name: 'Trichy',
      country: 'Tamil Nadu, India',
      context: 'I was born here.',
      line: 'Where I learned that a story told slowly is still worth telling.',
    },
    {
      no: '02',
      name: 'Salem',
      country: 'Tamil Nadu, India',
      context: 'I did my bachelor’s here.',
      line: 'The rhythm between Trichy and the world. The city that shaped my pace.',
    },
    {
      no: '03',
      name: 'Milano',
      country: 'Lombardy, Italy',
      context: 'I did my postgrad here.',
      line: "Where I learned that beauty is not decoration. It's intention made visible.",
    },
    {
      no: '04',
      name: 'Chennai',
      country: 'Tamil Nadu, India',
      context: 'I am here now.',
      line: 'Where it all comes together. Where NIRANULA lives.',
    },
  ],
  note: "Open to travel, internationally too, especially if there's a sukku coffee at the end of it.",
};

/* Services. Emotional entry point first, no pricing, enquire CTAs.
   Each service opens a full detail page (modal overlay). */
export interface Service {
  id: string;
  name: string;
  tag: string;
  entry: string;
  detail: string;
  cta: string;
  full: {
    whatItIs: string;
    doLabel: string;
    doList: string[];
    whoFor: string;
    howToStart?: string;
  };
}

export const services: Service[] = [
  {
    id: 'founders-therapy',
    name: "Founder's Therapy™",
    tag: 'Signature',
    entry:
      'You know your brand better than anyone. And somehow, when you sit down to explain it, nothing comes out right. This session is for that gap.',
    detail:
      'A 90–120 minute emotional strategy deep-dive where we untangle your story, name what you actually do, and find the words that finally feel like you.',
    cta: "Let's talk about this",
    full: {
      whatItIs:
        'A 90–120 minute emotional strategy deep-dive where we untangle your story, name what you actually do, and find the words that finally feel like you.',
      doLabel: 'What we cover',
      doList: [
        'What your brand actually is (vs. what you’ve been saying it is)',
        'The emotional core — what you’re really trying to make people feel',
        'Language that sounds like you, not a template',
        'A clear direction for your next communication step',
      ],
      whoFor:
        'Founders who are great at what they do but keep stumbling when they try to explain it.',
      howToStart:
        'You don’t need a perfect brief. Just send: "Hi, I think I need help with..."',
    },
  },
  {
    id: 'brand-campaign-concepts',
    name: 'Brand & Campaign Concepts',
    tag: 'Direction',
    entry: "You have an idea. It's good. You just can't quite shape it into something you'd show the world. Yet.",
    detail:
      'Strategic and creative concept development for brand positioning, campaign directions, and launch narratives.',
    cta: "Let's talk about this",
    full: {
      whatItIs:
        'Strategic and creative concept development for brand positioning, campaign directions, and launch narratives.',
      doLabel: 'What we do',
      doList: [
        'Develop the emotional core of a campaign',
        'Build the story world and narrative arc',
        'Write the concept brief, headline directions, and activation ideas',
        'Create a direction you can hand to a designer or team',
      ],
      whoFor:
        'Brands preparing a launch, a pivot, or a new campaign who need the story before the visuals.',
    },
  },
  {
    id: 'brand-voice-copywriting',
    name: 'Brand Voice + Copywriting',
    tag: 'Words',
    entry:
      'Every time you read your own website, something feels slightly off. Not wrong. Just... not quite you.',
    detail: 'Building or refining your brand voice — then writing with it.',
    cta: "Let's talk about this",
    full: {
      whatItIs: 'Building or refining your brand voice — then writing with it.',
      doLabel: 'What we do',
      doList: [
        'Develop a brand voice guide (tone, language, do’s and don’ts)',
        'Write or rewrite website copy, about pages, service descriptions',
        'Create templates your team can use consistently',
        'Make your communication feel like one coherent person said it all',
      ],
      whoFor:
        'Brands that have outgrown their current words, or founders who’ve never quite found them.',
    },
  },
  {
    id: 'seo-content-writing',
    name: 'SEO Content Writing',
    tag: 'Reach',
    entry:
      "You want to be found. But you don't want to sound like you were written by someone who's never met you.",
    detail: 'SEO content that reads like a human wrote it — because one did.',
    cta: "Let's talk about this",
    full: {
      whatItIs: 'SEO content that reads like a human wrote it — because one did.',
      doLabel: 'What we do',
      doList: [
        'Keyword research aligned with your brand voice',
        'Blog posts, insight articles, and landing page copy',
        'AEO-friendly structure (answers that get cited, not just ranked)',
        'Content that works for search engines without losing your personality',
      ],
      whoFor: 'Brands that need organic reach but won’t compromise on how they sound.',
    },
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    tag: 'Add-on',
    entry: 'Your subscribers opened your email. Now what? This is the work of making that moment matter.',
    detail: 'Email sequences, newsletters, and campaigns that feel personal at scale.',
    cta: "Let's talk about this",
    full: {
      whatItIs: 'Email sequences, newsletters, and campaigns that feel personal at scale.',
      doLabel: 'What we do',
      doList: [
        'Welcome sequences that introduce your brand the right way',
        'Newsletters that people actually look forward to',
        'Campaign emails tied to launches, stories, or moments',
        'Copy that feels like a message, not a broadcast',
      ],
      whoFor:
        'Brands with an email list they’re not using well — or founders who know they should be writing but don’t know what to say.',
    },
  },
];

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
      body: 'Just send me: “Hi, I think I need help with…” and we’ll figure it out together.',
    },
    {
      title: 'Response time',
      body: 'Varies by service and brand depth. But when I reply, it’s with full focus (and a movie-level background score I pretend no one hears).',
      hoverNote: "(yes, that's what's playing while I read your email.)",
      cinematic: true,
    },
    {
      title: 'A small note',
      body: "You don't need a perfect brief. You just need a starting point. I'll help shape the rest.",
    },
  ] as ContactNote[],
  ps: "p.s. Want to travel to see you and your brand? Happily. Especially if there's a mint ice cream or a sukku coffee involved.",
  psNote: '(open to international travel too.)',
};
