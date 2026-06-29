import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with active codes, tier list rankings, Trello and Discord status, calculators, guides, and source-backed Roblox progression help.`,
  valueProposition: `Track active ${gameConfig.name} codes, compare the best picks, and use practical tools before you spend time grinding in Roblox.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-06-10",
  freshnessLabel: "codes, tier list, and guides ready for verification",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    "custom keyboard",
    "keyboard painting",
    "keyboard color ideas",
    "RGB keyboard",
    "aesthetic keyboard",
    "keyboard design ideas",
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Best current picks and why they matter." },
        { label: "Calculator", href: "/calculator", description: "Decision helper for builds or progression." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Entity pages for items, units, maps, clans, or systems." },
        { label: "Guides", href: "/guides", description: "Beginner, farming, boss, and progression paths." },
        { label: "Color Ideas", href: "/guides/keyboard-color-ideas", description: "Custom keyboard colors, RGB themes, and aesthetic layouts." },
        { label: "FAQ", href: "/guides/faq", description: "Quick answers for design, painting, and upgrade questions." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Check sources" },
  { href: "/calculator", label: "Use calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "Live", note: "Designed for frequent checks" },
  { label: "Core pages", value: "10", note: "Codes, tier list, Trello, tools, guides, wiki" },
  { label: "Source notes", value: "Clear", note: "Official, community, and needs-check labels" },
  { label: "Source model", value: "Clear", note: "Official and community links split" }
];

export const activeCodes: GameCode[] = [
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Cash from painted keys",
    tier: "S",
    role: "Beginner cash focus",
    reason: "Cash is the verified core reward from painted keys, so early decisions should protect steady earning before chasing unknown upgrades.",
    confidence: "Needs check",
    bestFor: ["beginner", "cash"],
    sourceNote: "Roblox description confirms cash from painted keys. Exact income values still need checking.",
    teamNote: "Not a team-based game; compare by progress goal instead."
  },
  {
    name: "Better paints",
    tier: "A",
    role: "Cash value focus",
    reason: "Better paints are confirmed as an unlock path and likely matter for progression, but named tiers and multipliers are not verified yet.",
    confidence: "Needs check",
    bestFor: ["cash", "progression"],
    sourceNote: "Roblox description confirms better paints. Costs and effects need in-game data.",
    teamNote: "Use alongside roller and expansion decisions."
  },
  {
    name: "Roller upgrades",
    tier: "A",
    role: "Painting speed focus",
    reason: "Roller upgrades are confirmed and should matter when painting speed becomes the bottleneck.",
    confidence: "Needs check",
    bestFor: ["speed", "progression"],
    sourceNote: "Roblox description confirms roller upgrades. Upgrade stats still need checking.",
    teamNote: "Compare against better paints when deciding what improves the next few minutes."
  },
  {
    name: "Keyboard expansion",
    tier: "B",
    role: "Area growth focus",
    reason: "Expansion is confirmed, but it should be weighed against current cash speed and upgrade costs before treating it as the best next buy.",
    confidence: "Needs check",
    bestFor: ["expansion", "long run"],
    sourceNote: "Roblox description confirms keyboard expansion. Cost and order are not verified.",
    teamNote: "Use the calculator with your own costs once visible in-game."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Calculator`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A practical decision helper that can later become a full formula-based calculator."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranks the current best picks with notes for beginners, farming, and late-game use."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks active codes, expired-code conflicts, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides/beginner",
    eyebrow: "Guide",
    description: "First-session path: paint keys, collect cash, and check upgrades without trusting unverified claims."
  },
  {
    title: "Cash guide",
    href: "/guides/cash",
    eyebrow: "Guide",
    description: "How cash from painted keys connects to paints, roller upgrades, and expansion planning."
  },
  {
    title: "Upgrade guide",
    href: "/guides/upgrades",
    eyebrow: "Guide",
    description: "Compare better paints, roller upgrades, and bigger keyboard progress with confidence labels."
  },
  {
    title: "Keyboard expansion guide",
    href: "/guides/keyboard",
    eyebrow: "Guide",
    description: "Plan bigger keyboard progress after checking cash pace, upgrade costs, and expansion value."
  },
  {
    title: "Custom keyboard ideas",
    href: "/guides/custom-keyboard",
    eyebrow: "Long-tail guide",
    description: "Plan a custom keyboard theme that can grow with paints, upgrades, and expansion."
  },
  {
    title: "Keyboard painting guide",
    href: "/guides/keyboard-painting",
    eyebrow: "Long-tail guide",
    description: "Paint keys in cleaner passes while keeping cash and upgrade goals in view."
  },
  {
    title: "Keyboard color ideas",
    href: "/guides/keyboard-color-ideas",
    eyebrow: "Long-tail guide",
    description: "Compare pastel, neon, RGB, gradient, and high-contrast keyboard color ideas."
  },
  {
    title: "RGB keyboard guide",
    href: "/guides/rgb-keyboard",
    eyebrow: "Long-tail guide",
    description: "Build RGB-style rows, gradients, and neon accents without making the board messy."
  },
  {
    title: "Aesthetic keyboard ideas",
    href: "/guides/aesthetic-keyboard",
    eyebrow: "Long-tail guide",
    description: "Use pastel, minimalist, cozy, neon, or gradient styles for a cleaner keyboard theme."
  },
  {
    title: "Keyboard design ideas",
    href: "/guides/keyboard-design-ideas",
    eyebrow: "Long-tail guide",
    description: "Use rows, borders, center highlights, and expansion-friendly layout patterns."
  },
  {
    title: "Painting tips",
    href: "/guides/painting-tips",
    eyebrow: "Tips",
    description: "Progress faster by matching painting choices to cash, paint, roller, and expansion goals."
  },
  {
    title: "FAQ",
    href: "/guides/faq",
    eyebrow: "FAQ",
    description: "Answers for custom keyboards, keyboard painting, colors, RGB themes, and upgrades."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Paints",
    href: "/wiki/paints",
    eyebrow: "Wiki",
    description: "What is verified about better paints, unlocks, and the paint tier data that still needs checking."
  },
  {
    title: "Roller upgrades",
    href: "/wiki/roller",
    eyebrow: "Wiki",
    description: "Track what is known about the roller upgrade path without inventing speed or cost values."
  },
  {
    title: "Cash and keyboard expansion",
    href: "/wiki/cash",
    eyebrow: "Wiki",
    description: "Learn the confirmed cash loop and how it connects to bigger keyboard progress."
  },
  {
    title: "Custom keyboard",
    href: "/wiki/custom-keyboard",
    eyebrow: "Wiki",
    description: "Define custom keyboard terms and how design choices connect to game progression."
  },
  {
    title: "RGB keyboard",
    href: "/wiki/rgb-keyboard",
    eyebrow: "Wiki",
    description: "Explain RGB-style themes, gradients, neon accents, and source-safe paint notes."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Trello, Discord, and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use this status route or verified creator links to separate official boards from community references."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Split major game entities into wiki pages when search demand exists instead of burying everything on the homepage."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Gameplay overview",
    href: "#",
    eyebrow: "Video",
    description: "Use a current YouTube creator guide that explains the game loop and shows real gameplay."
  },
  {
    title: "Beginner route",
    href: "#",
    eyebrow: "Video",
    description: "Use a recent YouTube walkthrough for the first session or first major unlock."
  },
  {
    title: "Meta showcase",
    href: "#",
    eyebrow: "Video",
    description: "Use a YouTube video that supports rankings, builds, update context, or advanced strategy."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes, tier lists, calculators, guides, and source-backed progression help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, tier list, Trello/Discord status, calculator, beginner guide, wiki hub, and sources. Add entity pages after research confirms the game's real systems."
    }
  ],
  codes: [
    {
      q: `Are there any working ${gameConfig.name} codes right now?`,
      a: `No working ${gameConfig.name} codes were verified in the latest source pass. This page should stay empty until a code is confirmed from the game, creator channels, or a trusted live test.`
    },
    {
      q: `Where should ${gameConfig.name} codes be checked?`,
      a: "Start with the official Roblox game page, creator-owned channels when verified, update notes, and trusted community reports. Do not trust random code lists without a checked date."
    },
    {
      q: "Why is a code missing from this page?",
      a: "Unverified code claims are held back until they can be checked. That keeps the page useful for players instead of filling it with fake rewards."
    },
    {
      q: "Why is my code not working?",
      a: "The code may be expired, mistyped, server-gated, already redeemed, or never real. Rejoin the game and paste the code exactly before reporting it."
    },
    {
      q: `How often are ${gameConfig.name} codes checked?`,
      a: "Codes should be checked every 6 to 12 hours after launch, and again whenever the Roblox description, title, or community sources mention an update."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Replace placeholder tiers with research-backed rankings, explain use cases, and split beginner, farming, and endgame recommendations when needed."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The bootstrap calculator is a starter decision helper. Replace it with verified formulas, tables, and game-specific inputs as research improves."
    }
  ]
};
