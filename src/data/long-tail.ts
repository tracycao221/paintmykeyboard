import { siteConfig } from "@/data/site";

export type LongTailPage = {
  section: "guides" | "wiki";
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  intent: string;
  sections: Array<{
    title: string;
    body: string;
    bullets: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  related: Array<{
    href: string;
    label: string;
  }>;
};

export const longTailPages: LongTailPage[] = [
  {
    section: "guides",
    slug: "custom-keyboard",
    eyebrow: "Custom keyboard guide",
    title: "Custom Keyboard Ideas for Paint My Keyboard",
    description: "Custom keyboard ideas for Paint My Keyboard players who want better color themes, cleaner layouts, and smarter upgrade planning.",
    intro: "A custom keyboard in Paint My Keyboard is not only about making keys look different. It is also a way to plan which colors, upgrades, and expansion goals make your board feel intentional while you keep earning cash from painted keys.",
    intent: "custom keyboard",
    sections: [
      {
        title: "Start with a simple theme",
        body: "Pick one clear direction before you spend time painting every key. A focused custom keyboard is easier to read, easier to improve, and less likely to feel messy after you unlock more space.",
        bullets: ["Use two main colors and one accent color.", "Keep high-contrast colors for keys you want to notice first.", "Save complex patterns until your keyboard area is larger."]
      },
      {
        title: "Match design choices to progress",
        body: "Because Paint My Keyboard is built around painting keys, collecting cash, unlocking better paints, upgrading the roller, and expanding the keyboard, your design plan should leave room for new unlocks.",
        bullets: ["Use early colors as placeholders instead of final choices.", "Upgrade paints when a new color improves the whole theme.", "Use the calculator before spending cash needed for expansion."]
      },
      {
        title: "Keep your layout readable",
        body: "Readable designs work better than noisy designs. If every key is a different high-energy color, the custom keyboard may look busy instead of polished.",
        bullets: ["Group similar keys together.", "Use accent colors on corners, rows, or center keys.", "Review your board after each expansion before repainting everything."]
      }
    ],
    faqs: [
      {
        question: "What is the best custom keyboard theme in Paint My Keyboard?",
        answer: "The safest theme is a simple two-color base with one accent color. Exact best colors depend on what paints you have unlocked."
      },
      {
        question: "Should I spend cash on design or upgrades first?",
        answer: "If an upgrade improves cash speed or unlocks better paints, it may help your custom design faster than repainting the same small keyboard repeatedly."
      }
    ],
    related: [
      { href: "/guides/keyboard-color-ideas", label: "Keyboard color ideas" },
      { href: "/guides/keyboard-design-ideas", label: "Keyboard design ideas" },
      { href: "/calculator", label: "Upgrade calculator" }
    ]
  },
  {
    section: "guides",
    slug: "keyboard-painting",
    eyebrow: "Keyboard painting guide",
    title: "Keyboard Painting Guide for Paint My Keyboard",
    description: "Keyboard painting tips for Paint My Keyboard, including cleaner color planning, cash-aware repainting, and upgrade timing.",
    intro: "Keyboard painting is the center of Paint My Keyboard. The goal is not just to cover keys with color, but to paint in a way that supports cash collection, better paint unlocks, roller upgrades, and a bigger keyboard over time.",
    intent: "keyboard painting",
    sections: [
      {
        title: "Paint in passes",
        body: "A pass-based method keeps the keyboard organized. Paint broad areas first, then return for accents, patterns, and cleanup once you know which upgrades are worth buying next.",
        bullets: ["Do a base color pass before detailed accents.", "Use a second pass for rows, borders, or feature keys.", "Wait for bigger keyboard space before complex patterns."]
      },
      {
        title: "Avoid wasting early cash",
        body: "Early cash is valuable because it can move you toward better paints or roller upgrades. Repainting every small decision can slow progress if you are still unlocking basic systems.",
        bullets: ["Test a color idea on a small section first.", "Prioritize upgrades that make painting faster.", "Repaint large areas after you know the next expansion cost."]
      },
      {
        title: "Use contrast on purpose",
        body: "Good keyboard painting uses contrast to guide the eye. Bright colors work best as highlights when the rest of the keyboard has a calmer base.",
        bullets: ["Pair bright accents with darker base colors.", "Use similar colors for smooth gradients.", "Keep one row or corner as a signature area."]
      }
    ],
    faqs: [
      {
        question: "How do I make keyboard painting look cleaner?",
        answer: "Use a base color first, then add accents in a second pass. Avoid changing every key at once."
      },
      {
        question: "Do better paints matter for keyboard painting?",
        answer: "Better paints are confirmed as part of progression, but exact effects and costs should be checked in game before publishing fixed values."
      }
    ],
    related: [
      { href: "/wiki/paints", label: "Paints wiki" },
      { href: "/guides/upgrades", label: "Upgrade guide" },
      { href: "/guides/painting-tips", label: "Painting tips" }
    ]
  },
  {
    section: "guides",
    slug: "keyboard-color-ideas",
    eyebrow: "Color ideas",
    title: "Keyboard Color Ideas for Paint My Keyboard",
    description: "Keyboard color ideas for Paint My Keyboard, from pastel themes and high contrast layouts to RGB-style rows and aesthetic palettes.",
    intro: "Keyboard color ideas are useful when you want your Paint My Keyboard board to feel planned instead of random. Start with a theme that works on a small board, then scale it as you unlock more keyboard space.",
    intent: "keyboard color ideas",
    sections: [
      {
        title: "Beginner-friendly palettes",
        body: "Simple palettes are easiest to build while you are still learning the painting loop. They also survive expansion better than tiny detail-heavy patterns.",
        bullets: ["Blue base with white highlights.", "Pink base with purple accents.", "Black or dark base with neon corner keys."]
      },
      {
        title: "Progression-friendly palettes",
        body: "A progression-friendly palette leaves obvious places for future colors. That matters when better paints unlock and you want the design to improve without starting over.",
        bullets: ["Reserve one row for future rare colors.", "Use neutral colors on large areas.", "Place new colors as accents before making them the main theme."]
      },
      {
        title: "Readable color rules",
        body: "The best color ideas are easy to understand at a glance. Use contrast, spacing, and repetition so the keyboard looks deliberate.",
        bullets: ["Repeat accent colors in at least three spots.", "Use gradients across rows instead of random placement.", "Avoid putting every bright color next to another bright color."]
      }
    ],
    faqs: [
      {
        question: "What are good keyboard color ideas for beginners?",
        answer: "Two-color themes, pastel rows, and dark base plus neon accents are easy choices before you unlock more paint options."
      },
      {
        question: "Can I make an RGB keyboard theme?",
        answer: "Yes. Use row gradients or edge lighting patterns, then refine the idea after more colors and keyboard space are available."
      }
    ],
    related: [
      { href: "/guides/rgb-keyboard", label: "RGB keyboard guide" },
      { href: "/guides/aesthetic-keyboard", label: "Aesthetic keyboard ideas" },
      { href: "/guides/custom-keyboard", label: "Custom keyboard guide" }
    ]
  },
  {
    section: "guides",
    slug: "rgb-keyboard",
    eyebrow: "RGB guide",
    title: "RGB Keyboard Ideas for Paint My Keyboard",
    description: "RGB keyboard ideas for Paint My Keyboard, including rainbow rows, neon accents, gradient planning, and when to wait for better paints.",
    intro: "An RGB keyboard theme works well in Paint My Keyboard because the game already asks you to paint keys and chase better colors. The trick is to make the RGB layout readable, not just bright.",
    intent: "RGB keyboard",
    sections: [
      {
        title: "Use rows for RGB order",
        body: "Rows are the easiest way to make RGB colors look organized. A left-to-right or top-to-bottom sequence gives the keyboard structure.",
        bullets: ["Place red, orange, yellow, green, blue, and purple in order.", "Repeat the same order after expansion.", "Use darker colors between bright rows if the design feels too loud."]
      },
      {
        title: "Make neon accents stand out",
        body: "Neon-style accents work better when they have space around them. If the whole board is bright, no key feels special.",
        bullets: ["Keep the base darker when possible.", "Use RGB accents around edges or corners.", "Save the brightest colors for feature keys."]
      },
      {
        title: "Wait for better paints when needed",
        body: "If your current paints cannot make the RGB look you want, it may be smarter to keep earning cash and unlock better paint options before repainting the full board.",
        bullets: ["Use temporary color blocks early.", "Check paint unlocks before finalizing the palette.", "Compare paint unlocks with roller upgrades before spending cash."]
      }
    ],
    faqs: [
      {
        question: "Is RGB a good theme for Paint My Keyboard?",
        answer: "Yes, especially if you use rows, gradients, or edge accents instead of random bright colors."
      },
      {
        question: "Should RGB colors be placed randomly?",
        answer: "Random placement can look messy. Ordered rows or smooth gradients usually look cleaner."
      }
    ],
    related: [
      { href: "/wiki/rgb-keyboard", label: "RGB keyboard wiki" },
      { href: "/guides/keyboard-color-ideas", label: "Color ideas" },
      { href: "/wiki/paints", label: "Paints" }
    ]
  },
  {
    section: "guides",
    slug: "aesthetic-keyboard",
    eyebrow: "Aesthetic guide",
    title: "Aesthetic Keyboard Ideas for Paint My Keyboard",
    description: "Aesthetic keyboard ideas for Paint My Keyboard, including pastel, neon, minimalist, gradient, and cozy color themes.",
    intro: "An aesthetic keyboard should feel cohesive. In Paint My Keyboard, that means choosing a style that works with your current colors while leaving space for better paints and bigger keyboard areas.",
    intent: "aesthetic keyboard",
    sections: [
      {
        title: "Pick an aesthetic category",
        body: "A named style makes decisions easier. Instead of choosing every color separately, use one category to guide the whole board.",
        bullets: ["Pastel: soft pink, blue, mint, and white.", "Neon: dark base with bright edge highlights.", "Minimalist: one base color with one clean accent."]
      },
      {
        title: "Use symmetry for polish",
        body: "Symmetry makes a keyboard feel planned even when the color palette is simple. It is also easier to extend when the keyboard grows.",
        bullets: ["Mirror left and right side accents.", "Keep center keys as a highlight area.", "Repeat row patterns after expansion."]
      },
      {
        title: "Do not over-detail early",
        body: "Early keyboard space may not support complicated designs. Build the aesthetic in layers, then add detail when upgrades and expansion make it easier.",
        bullets: ["Start with the main color mood.", "Add accents after the base looks clean.", "Save complex patterns for later keyboard sizes."]
      }
    ],
    faqs: [
      {
        question: "What aesthetic keyboard theme is easiest?",
        answer: "Pastel two-tone themes and minimalist dark-base themes are easiest because they need fewer color decisions."
      },
      {
        question: "Can aesthetic designs still be practical?",
        answer: "Yes. A clean design can still support progression if you avoid spending all cash on constant repainting."
      }
    ],
    related: [
      { href: "/guides/keyboard-design-ideas", label: "Design ideas" },
      { href: "/guides/custom-keyboard", label: "Custom keyboard" },
      { href: "/guides/keyboard-painting", label: "Keyboard painting" }
    ]
  },
  {
    section: "guides",
    slug: "keyboard-design-ideas",
    eyebrow: "Design ideas",
    title: "Keyboard Design Ideas for Paint My Keyboard",
    description: "Keyboard design ideas for Paint My Keyboard, with practical layouts for rows, gradients, accent keys, and expansion-friendly themes.",
    intro: "Keyboard design ideas work best when they are easy to repeat. Paint My Keyboard rewards players who keep improving the board, so a good design should survive better paints and bigger keyboard expansions.",
    intent: "keyboard design ideas",
    sections: [
      {
        title: "Use layout patterns",
        body: "A layout pattern is the structure behind your colors. It helps the keyboard stay organized even when you change the palette.",
        bullets: ["Rows: each row gets a color family.", "Corners: accent colors mark the edges.", "Center glow: brightest color goes near the middle."]
      },
      {
        title: "Plan for expansion",
        body: "Expansion can disrupt a tiny design. Choose patterns that can repeat naturally when new keys appear.",
        bullets: ["Repeat row colors after every expansion.", "Keep borders simple so they can grow outward.", "Avoid designs that require exact key counts until verified."]
      },
      {
        title: "Connect design to upgrades",
        body: "Design and progression should support each other. If better paints unlock more theme options, it may be worth delaying a full redesign until after a key upgrade.",
        bullets: ["Use temporary designs while farming cash.", "Upgrade paints for theme depth.", "Use roller upgrades when repainting large areas takes too long."]
      }
    ],
    faqs: [
      {
        question: "What keyboard design idea works for any size?",
        answer: "Row gradients and border accents scale well because they can repeat as the keyboard expands."
      },
      {
        question: "Should design ideas use exact key counts?",
        answer: "Avoid exact key-count designs until the current expansion sizes are verified in game."
      }
    ],
    related: [
      { href: "/guides/keyboard-color-ideas", label: "Color ideas" },
      { href: "/guides/keyboard", label: "Expansion guide" },
      { href: "/wiki/keyboard", label: "Keyboard wiki" }
    ]
  },
  {
    section: "guides",
    slug: "painting-tips",
    eyebrow: "Tips",
    title: "Paint My Keyboard Tips for Faster Progress",
    description: "Paint My Keyboard tips for painting keys, choosing upgrades, planning colors, and avoiding wasted cash while building a better keyboard.",
    intro: "Good Paint My Keyboard tips should help both progress and design. The same choices that make painting faster can also make custom keyboard themes easier to finish.",
    intent: "tips",
    sections: [
      {
        title: "Keep cash goals visible",
        body: "Before you repaint large areas, know what upgrade or expansion you are saving for. This prevents design changes from slowing core progress.",
        bullets: ["Set a next-upgrade goal.", "Track current cash before repainting.", "Use the calculator for rough time planning."]
      },
      {
        title: "Upgrade around bottlenecks",
        body: "If painting feels slow, roller upgrades may matter. If colors feel limited, better paints may matter. If space feels cramped, expansion may matter.",
        bullets: ["Identify the current bottleneck.", "Spend on the upgrade that removes it.", "Recheck the bottleneck after each purchase."]
      },
      {
        title: "Use source-safe information",
        body: "Because exact values can change or remain unverified, keep notes about what you personally observe in game before treating a tip as final.",
        bullets: ["Record upgrade costs.", "Check whether paints change cash value.", "Compare results after each expansion."]
      }
    ],
    faqs: [
      {
        question: "What is the best tip for new players?",
        answer: "Do not overcomplicate early designs. Paint keys, collect cash, and learn which upgrade is currently blocking progress."
      },
      {
        question: "Should I follow every viral tip?",
        answer: "No. Use tips that match verified in-game systems and avoid claims with no checked source."
      }
    ],
    related: [
      { href: "/guides/beginner", label: "Beginner guide" },
      { href: "/guides/cash", label: "Cash guide" },
      { href: "/calculator", label: "Calculator" }
    ]
  },
  {
    section: "guides",
    slug: "faq",
    eyebrow: "FAQ",
    title: "Paint My Keyboard FAQ",
    description: "Paint My Keyboard FAQ covering custom keyboards, keyboard painting, color ideas, RGB themes, upgrades, cash, and source-safe tips.",
    intro: "This FAQ collects common Paint My Keyboard questions that do not need a full guide by themselves. It focuses on custom keyboard design, keyboard painting, color ideas, and practical progression choices.",
    intent: "FAQ",
    sections: [
      {
        title: "What should I do first?",
        body: "Start by learning the basic loop: paint colorful keyboard keys, collect cash, unlock better paints, upgrade the roller, and expand your keyboard.",
        bullets: ["Paint enough keys to understand cash flow.", "Avoid exact-value assumptions until checked.", "Use simple color themes early."]
      },
      {
        title: "How should I pick colors?",
        body: "Pick colors around a theme, not one key at a time. Themes make the keyboard look better and make future repainting easier.",
        bullets: ["Choose a base color.", "Choose one accent color.", "Add RGB or aesthetic details after expansion."]
      },
      {
        title: "What should I verify in game?",
        body: "The official description confirms the core loop, but exact costs and values should be verified before they are treated as final.",
        bullets: ["Paint costs and unlock order.", "Roller upgrade effects.", "Keyboard expansion prices."]
      }
    ],
    faqs: [
      {
        question: "Is Paint My Keyboard about custom keyboards?",
        answer: "The game focuses on painting keyboard keys and expanding the keyboard, so custom keyboard ideas fit the core loop."
      },
      {
        question: "Does this site publish fake codes or exact values?",
        answer: "No. Unverified claims are held until they can be checked against the game or reliable sources."
      },
      {
        question: "Where should I go after the FAQ?",
        answer: "Use the keyboard color ideas guide, custom keyboard guide, calculator, or wiki pages depending on your next question."
      }
    ],
    related: [
      { href: "/guides/custom-keyboard", label: "Custom keyboard guide" },
      { href: "/guides/keyboard-color-ideas", label: "Color ideas" },
      { href: "/sources", label: "Sources" }
    ]
  },
  {
    section: "wiki",
    slug: "custom-keyboard",
    eyebrow: "Wiki",
    title: "Custom Keyboard Wiki for Paint My Keyboard",
    description: "Custom keyboard wiki for Paint My Keyboard, explaining how custom layouts, paints, colors, and expansion goals fit the game loop.",
    intro: "Custom keyboard is a useful way to describe the player goal of turning a plain board into a more personal layout. In Paint My Keyboard, that goal connects directly to painting keys, better paints, roller upgrades, and bigger keyboard expansion.",
    intent: "custom keyboard wiki",
    sections: [
      {
        title: "Meaning in this game",
        body: "Custom keyboard does not need to mean a real hardware keyboard. On this site, it refers to the in-game keyboard you paint, expand, and improve.",
        bullets: ["Painted keys create the visual identity.", "Better paints can improve theme options.", "Expansion gives more room for patterns."]
      },
      {
        title: "Design terms to know",
        body: "Useful design terms make guides easier to follow and help players compare ideas without inventing unverified game values.",
        bullets: ["Base color: the main color across most keys.", "Accent color: a small highlight color.", "Pattern: repeated layout such as rows, borders, or gradients."]
      },
      {
        title: "What still needs verification",
        body: "Exact paint names, upgrade effects, and expansion costs should be checked in game before being added as factual tables.",
        bullets: ["Paint unlock names.", "Roller speed changes.", "Keyboard size and price milestones."]
      }
    ],
    faqs: [
      {
        question: "Is custom keyboard an official term?",
        answer: "It is used here as a search-friendly phrase for the in-game keyboard design goal, not as an official Roblox title unless verified later."
      },
      {
        question: "Where do I find custom keyboard ideas?",
        answer: "Start with the custom keyboard guide, keyboard color ideas, RGB keyboard guide, and aesthetic keyboard guide."
      }
    ],
    related: [
      { href: "/guides/custom-keyboard", label: "Custom keyboard guide" },
      { href: "/guides/aesthetic-keyboard", label: "Aesthetic keyboard" },
      { href: "/wiki/keyboard", label: "Keyboard expansion" }
    ]
  },
  {
    section: "wiki",
    slug: "rgb-keyboard",
    eyebrow: "Wiki",
    title: "RGB Keyboard Wiki for Paint My Keyboard",
    description: "RGB keyboard wiki for Paint My Keyboard, covering RGB-style themes, gradients, neon accents, and source-safe paint notes.",
    intro: "RGB keyboard is a visual style players can use while painting keys. It works best when colors are arranged with a repeatable structure instead of scattered randomly.",
    intent: "RGB keyboard wiki",
    sections: [
      {
        title: "RGB theme definition",
        body: "For Paint My Keyboard, an RGB theme usually means rainbow, neon, or gradient colors arranged across rows, edges, corners, or feature keys.",
        bullets: ["Rainbow rows are the easiest RGB layout.", "Neon accents work best on darker bases.", "Gradients need enough color options to look smooth."]
      },
      {
        title: "Progression connection",
        body: "An RGB theme may depend on better paints. If the current palette is limited, it can be better to unlock more paint options before finalizing the design.",
        bullets: ["Use temporary RGB blocks early.", "Upgrade paints for smoother gradients.", "Expand the keyboard before adding complex RGB borders."]
      },
      {
        title: "Source-safe notes",
        body: "The exact paint list is not published here until verified. This page covers design patterns that can be adapted once colors and costs are known.",
        bullets: ["Avoid claiming exact rare colors without proof.", "Check in-game paint names.", "Record whether paint upgrades affect cash value."]
      }
    ],
    faqs: [
      {
        question: "Can Paint My Keyboard have an RGB keyboard look?",
        answer: "Yes, players can build RGB-style themes by arranging colors into rows, gradients, edge lights, or neon accents."
      },
      {
        question: "Does RGB change earnings?",
        answer: "The visual RGB idea itself is a design choice. Any earning changes should only be tied to verified paint or upgrade mechanics."
      }
    ],
    related: [
      { href: "/guides/rgb-keyboard", label: "RGB keyboard guide" },
      { href: "/guides/keyboard-color-ideas", label: "Color ideas" },
      { href: "/wiki/paints", label: "Paints wiki" }
    ]
  }
];

export const guideLongTailPages = longTailPages.filter((page) => page.section === "guides");
export const wikiLongTailPages = longTailPages.filter((page) => page.section === "wiki");

export function getLongTailPage(section: LongTailPage["section"], slug: string) {
  return longTailPages.find((page) => page.section === section && page.slug === slug);
}

export function longTailPath(page: LongTailPage) {
  return `/${page.section}/${page.slug}`;
}

export function longTailCanonical(page: LongTailPage) {
  return `${siteConfig.domain}${longTailPath(page)}`;
}
