// ---------------------------------------------------------------------------
//  SITE CONFIGURATION
//  This is the ONE file to edit for your name, contact details, and links.
//  Everything else on the site reads from here, so change it in one place.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Klaas Meersman",
  // Short tagline shown under your name on the home page and in the tab title.
  title: "PhD Researcher — Light & Lighting",
  role: "PhD Researcher",
  affiliation: "Light & Lighting Laboratory, KU Leuven",
  // A one-line description used for search engines and social previews.
  description:
    "Klaas Meersman — PhD researcher at the Light & Lighting Laboratory, KU Leuven, working on virtual reality and digital twins for human-centric, spatially adaptive lighting.",
  email: "klaas.meersman@kuleuven.be",
  // City / campus, shown in the footer and contact section.
  location: "Ghent, Belgium",
};

// ---------------------------------------------------------------------------
//  TOP NAVIGATION
//  Add / remove / reorder the links in the site header here.
// ---------------------------------------------------------------------------

export const NAV = [
  { label: "About", href: "/" },
  { label: "Publications", href: "/publications" },
  { label: "Research", href: "/research" },
  { label: "Teaching", href: "/teaching" },
  { label: "CV", href: "/cv" },
];

// ---------------------------------------------------------------------------
//  SOCIAL / ACADEMIC LINKS
//  Shown in the header, footer, and contact section. Delete any you don't use;
//  leave `href` empty ("") to hide a single link without removing the entry.
// ---------------------------------------------------------------------------

export const LINKS = {
  email: "mailto:klaas.meersman@kuleuven.be",
  // Your KU Leuven page. Swap this for your personal "Who's Who" profile
  // (https://www.kuleuven.be/wieiswie/en/person/000000) once you have the link.
  kuleuven: "https://iiw.kuleuven.be/onderzoek/lichttechnologie/english/staff",
  orcid: "", // e.g. https://orcid.org/0000-0000-0000-0000
  github: "https://github.com/klaas-meersman",
  linkedin: "", // e.g. https://www.linkedin.com/in/klaas-meersman
};

// The Light & Lighting Laboratory's own site (linked from the bio).
export const LAB_URL = "https://iiw.kuleuven.be/onderzoek/lichttechnologie";
