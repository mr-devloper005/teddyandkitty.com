import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: '',
  },
  footer: {
    tagline: 'Visual posts, creators, and discoverable profiles',
  },
  hero: {
    badge: 'Playful visual profiles',
    title: [
      'Browse image stories, collections, and profile-driven creativity.',
      'Forest, gold, and cream — a boutique studio for visual identity.',
    ],
    description:
      'A playful image-first network where visual posts and profile identity lead the experience.',
    primaryCta: {
      label: 'See galleries',
      href: '/images',
    },
    secondaryCta: {
      label: 'Visit profiles',
      href: '/profile',
    },
    searchPlaceholder: 'Search images, creators, collections, and visual posts',
    focusLabel: 'Focus',
    featureCardBadge: 'latest cover rotation',
    featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
    featureCardDescription:
      'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
  },
  home: {
    metadata: {
      title: 'Galleries, profiles, and visual discovery',
      description:
        'Browse image collections and creator profiles through a calm, gallery-first experience with boutique forest-and-gold styling.',
      openGraphTitle: 'Galleries, profiles, and visual discovery',
      openGraphDescription:
        'Explore galleries and profiles with generous spacing, warm neutrals, and a refined visual rhythm.',
      keywords: ['image galleries', 'creator profiles', 'visual discovery', 'photo collections'],
    },
    introBadge: 'About the platform',
    introTitle: 'Built for imagery and identity — galleries and profiles in one refined rhythm.',
    introParagraphs: [
      'Teddy And Kitty centers on visual posts and discoverable profiles so visitors can scan imagery first, then meet the people behind the work.',
      'The layout borrows from premium boutique surfaces: forest green structure, warm gold accents, and cream paper backgrounds that stay easy on the eyes.',
      'Whether someone starts with a gallery lane or a profile directory, the navigation stays compact and the motion stays intentionally light.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Gallery-first homepage with overlapping discovery card for quick search.',
      'Profile lanes that mirror the same typography and spacing as imagery cards.',
      'Trust-forward presentation without marketplace clutter.',
      'CSS-first motion so the site stays fast on mobile and desktop.',
    ],
    primaryLink: {
      label: 'Browse galleries',
      href: '/images',
    },
    secondaryLink: {
      label: 'View profiles',
      href: '/profile',
    },
  },
  cta: {
    badge: 'Start exploring',
    title: 'Explore articles, visuals, and resources through one connected experience.',
    description:
      'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
    primaryCta: {
      label: 'Get Started Free',
      href: '/register',
    },
    secondaryCta: {
      label: 'Contact Sales',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'Read articles, stories, guides, and long-form posts across topics and interests.',
  },
  listing: {
    title: 'Listings and discoverable pages',
    description: 'Explore listings, services, brands, and structured pages organized for easier browsing.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'Browse classifieds, offers, notices, and time-sensitive posts across categories.',
  },
  image: {
    title: 'Galleries & visual stories',
    description: 'Browse curated image posts, mood boards, and gallery-style collections on Teddy And Kitty.',
  },
  profile: {
    title: 'Creator & member profiles',
    description: 'Meet the people behind the imagery—bios, highlights, and links in one calm profile directory.',
  },
  sbm: {
    title: 'Curated links and saved resources',
    description: 'Browse useful links, saved references, and curated resources organized for discovery.',
  },
  pdf: {
    title: 'PDFs and downloadable resources',
    description: 'Open reports, documents, and downloadable resources shared across the platform.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Inside the gallery lane',
    paragraphs: [
      'Every tile here is tuned for visual scanning—large imagery, soft cream panels, and forest typography so your eye finds the next story quickly.',
      'Use categories to cluster moods and themes, or jump to search when you already know the creator or keyword you want.',
      'When you are ready to publish, your posts inherit the same boutique styling visitors see on the homepage.',
    ],
    links: [
      { label: 'Creator profiles', href: '/profile' },
      { label: 'Help Center', href: '/help' },
      { label: 'Community', href: '/community' },
    ],
  },
  profile: {
    title: 'How profiles work here',
    paragraphs: [
      'Profiles are identity anchors: avatar, bio, highlights, and outbound links stay legible on cream surfaces with gold micro-accents.',
      'They pair naturally with galleries—visitors can fall in love with an image, then learn who made it in a single click.',
      'Whether you are a hobbyist or a working creative, the layout keeps trust cues visible without corporate clutter.',
    ],
    links: [
      { label: 'Browse galleries', href: '/images' },
      { label: 'Help Center', href: '/help' },
      { label: 'Join free', href: '/register' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts reports, guides, downloadable files, and longer-form document resources that support reading and discovery.',
      'These resources work alongside stories, listings, and profiles, helping document-style content stay connected to the rest of the platform.',
      'Browse by category to find relevant files quickly, then continue into related sections when you want more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Explore profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across Teddy And Kitty.',
      'They pair with galleries and profiles so visitors can jump from a brief note into richer visual context.',
      'Use these posts as lightweight entry points when you are not ready for a full gallery drop.',
    ],
    links: [
      { label: 'Browse galleries', href: '/images' },
      { label: 'Meet creators', href: '/profile' },
      { label: 'Help Center', href: '/help' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}

export const exploreLandingCopy = {
  gallery: {
    eyebrow: 'Galleries',
    headline: 'A calm studio wall for imagery—built for slow browsing and fast saves.',
    subhead:
      'Scroll wide compositions, seasonal sets, and playful experiments. The same forest, gold, and cream language from the homepage carries through so Teddy And Kitty always feels like one product.',
    primaryCta: 'Create your first post',
    secondaryCta: 'View profiles',
    pillars: [
      {
        kicker: 'Visual rhythm',
        title: 'Large surfaces, gentle motion',
        body: 'Cards lift on hover, imagery stays dominant, and typography stays quiet so photos stay the hero.',
      },
      {
        kicker: 'Discovery',
        title: 'Search + categories together',
        body: 'Narrow by topic with the filter card, or leap straight into global search when you know what you need.',
      },
      {
        kicker: 'Belonging',
        title: 'Made for cozy communities',
        body: 'Perfect for pet portraits, maker diaries, travel journals, and any story that deserves a softer corner of the internet.',
      },
    ],
    story:
      'We built this lane for people who are tired of algorithmic noise. Galleries load fast, respect your bandwidth, and keep accessibility defaults like readable contrast and keyboard-friendly controls.',
    bullets: [
      'Forest-and-gold accents mirror the homepage hero for instant brand recognition.',
      'Responsive grids reflow cleanly on phones so vertical stories still feel premium.',
      'Empty states stay encouraging—every gallery started with a single upload.',
    ],
    filterTitle: 'Tune this wall',
    filterHint: 'Pick a category to reshuffle the grid. Your selection persists in the URL so sharing is effortless.',
    filterCta: 'Apply category',
    searchPlaceholder: 'Try a creator name, tag, or mood…',
  },
  profiles: {
    eyebrow: 'Profiles',
    headline: 'Meet the humans (and pets) behind the lens.',
    subhead:
      'Profiles on Teddy And Kitty read like boutique dossiers: warm paper panels, forest headings, and gold buttons for the actions that matter—follow, message, or jump back to galleries.',
    primaryCta: 'Claim your profile',
    secondaryCta: 'Browse galleries',
    pillars: [
      {
        kicker: 'Trust',
        title: 'Identity without noise',
        body: 'Bio blocks, highlight chips, and outbound links stay structured so visitors know who they are supporting.',
      },
      {
        kicker: 'Continuity',
        title: 'Linked to every gallery',
        body: 'Jump from profile to latest uploads without losing context—navigation stays in the same visual family.',
      },
      {
        kicker: 'Care',
        title: 'Support when you need it',
        body: 'Help Center and Community pages explain moderation, safety, and creative tips in plain language.',
      },
    ],
    story:
      'Whether you showcase rescue pups, ceramics, or weekend photography, your profile should feel as considered as a printed portfolio. That is the bar we design to.',
    bullets: [
      'Avatar and cover treatments align with gallery cards for a cohesive studio look.',
      'Social proof areas are optional—turn them on when you are ready, not because a template demands it.',
      'Mobile layouts keep long bios readable with generous line height and cream backgrounds.',
    ],
    filterTitle: 'Slice the directory',
    filterHint: 'Filter profiles the same way you filter galleries so muscle memory transfers across the site.',
    filterCta: 'Apply category',
    searchPlaceholder: 'Search people, studios, or keywords…',
  },
  community: {
    eyebrow: 'Community',
    headline: 'A softer town square for creators, pet people, and curious browsers.',
    subhead:
      'Announcements, prompts, and quick updates live here—still wrapped in forest green, warm cream, and gold so it never feels like a generic social feed.',
    primaryCta: 'Share an update',
    secondaryCta: 'Browse galleries',
    pillars: [
      {
        kicker: 'Signal',
        title: 'Short posts, clear intent',
        body: 'Community cards stay compact so conversation stays readable on phones and late-night scrolling.',
      },
      {
        kicker: 'Safety',
        title: 'Human moderation mindset',
        body: 'Report anything that feels off—Help Center explains how we review and respond.',
      },
      {
        kicker: 'Continuity',
        title: 'Tied to galleries & profiles',
        body: 'Jump from a thread into imagery or a creator dossier without jarring layout shifts.',
      },
    ],
    story:
      'We treat community updates as ambient texture, not algorithmic pressure. Post when you have something genuine to say; the UI stays calm either way.',
    bullets: [
      'Gold CTAs match the homepage so actions are easy to spot.',
      'Category filters reuse the same muscle memory as Galleries and Profiles.',
      'Empty states stay friendly—every lively corner started with one hello.',
    ],
    filterTitle: 'Filter the feed',
    filterHint: 'Pick a category to refocus the list. Your choice syncs to the URL for easy sharing.',
    filterCta: 'Apply category',
    searchPlaceholder: 'Search topics, moods, or names…',
  },
} as const
