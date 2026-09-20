export type Shot = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** One line for the homepage row. */
  summary: string;
  problem: string;
  built: string;
  result: string;
  /** Only stores that are publicly reachable carry a link. */
  link?: { href: string; label: string };
  mockup: { src: string; alt: string };
  demo: { src: string; poster: string; caption: string };
  gallery: Shot[];
};

export const PROJECTS: Project[] = [
  {
    slug: "yassys",
    name: "YASSYS",
    category: "Shopify build and rebrand",
    summary:
      "A custom Dawn theme for an Egyptian fashion label, live and taking orders.",
    problem:
      "The store needed to read as a real fashion label rather than a stock Shopify theme.",
    built:
      "A custom Dawn theme carrying the brand palette and typography, with a sticky add to cart, a size guide modal, a wishlist, and an animated shipping bar, built mobile first.",
    result: "Live at yassyseg.com and taking customer orders.",
    link: { href: "https://www.yassyseg.com", label: "Visit yassyseg.com" },
    mockup: {
      src: "/work/yassys-mockup.jpg",
      alt: "YASSYS storefront shown on desktop and mobile",
    },
    demo: {
      src: "/work/yassys-demo.mp4",
      poster: "/work/yassys-poster.jpg",
      caption: "Browsing the YASSYS storefront on a phone",
    },
    gallery: [
      {
        src: "/work/yassys-collection.jpg",
        alt: "YASSYS t-shirt collection grid with sale badges and wishlist hearts",
        caption: "Collection grid with wishlist hearts and sale badges",
      },
      {
        src: "/work/yassys-product.jpg",
        alt: "YASSYS product page showing variant options and add to cart",
        caption: "Product page, tuned so the buy action stays reachable",
      },
    ],
  },
  {
    slug: "nordhome",
    name: "Nordhome",
    category: "Shopify theme build",
    summary:
      "A furniture storefront built around how people actually browse a home.",
    problem:
      "Furniture needs a storefront that feels considered. A generic template undersells the product.",
    built:
      "A custom theme with a filterable bestsellers rail, a trust row, a shop by room grid, and product pages matched to the brand's minimal tone.",
    result: "Complete and running.",
    mockup: {
      src: "/work/nordhome-mockup.jpg",
      alt: "Nordhome storefront shown on desktop and mobile",
    },
    demo: {
      src: "/work/nordhome-demo.mp4",
      poster: "/work/nordhome-poster.jpg",
      caption: "Walking through the Nordhome storefront",
    },
    gallery: [
      {
        src: "/work/nordhome-bestsellers.jpg",
        alt: "Nordhome bestsellers product rail with quick view controls",
        caption: "Bestsellers rail with quick view on every card",
      },
      {
        src: "/work/nordhome-rooms.jpg",
        alt: "Nordhome shop by room grid covering living room, bedroom, kitchen and outdoor",
        caption: "Shop by room, for browsing the way people furnish",
      },
    ],
  },
  {
    slug: "halsten",
    name: "HALSTEN",
    category: "Shopify theme build",
    summary:
      "A menswear theme built on Dawn, with the custom work kept to what Dawn does not already do.",
    problem:
      "A menswear label needs a storefront that looks considered without paying for an app on every feature.",
    built:
      "A design token system over Dawn, plus a hand built hero, sticky mobile add to cart, size guide modal with a cm and inch toggle, a wishlist that uses no app, a tabbed collection carousel, and a free shipping progress bar in the cart drawer.",
    result: "Complete and running.",
    mockup: {
      src: "/work/halsten-mockup.jpg",
      alt: "HALSTEN storefront shown on desktop and mobile",
    },
    demo: {
      src: "/work/halsten-demo.mp4",
      poster: "/work/halsten-poster.jpg",
      caption: "Walking through the HALSTEN storefront",
    },
    gallery: [
      {
        src: "/work/halsten-tabs.jpg",
        alt: "HALSTEN tabbed collection carousel showing outerwear, knitwear and tops",
        caption: "Tabbed collection carousel, built with CSS scroll snap",
      },
      {
        src: "/work/halsten-sizeguide.jpg",
        alt: "HALSTEN size guide modal showing a measurement table with a centimetre and inch toggle",
        caption: "Size guide modal, with a centimetre and inch toggle",
      },
    ],
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
