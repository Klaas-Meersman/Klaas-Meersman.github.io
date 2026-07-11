// ---------------------------------------------------------------------------
//  PUBLICATIONS
//  Add each paper as an object in the list below. The newest should go first.
//  Only `authors`, `title`, `venue`, and `year` are required — the rest are
//  optional links that only appear when you fill them in.
//
//  Tip: wrap your own name so it stands out, e.g. "K. Meersman".
// ---------------------------------------------------------------------------

export interface Publication {
  authors: string;
  title: string;
  venue: string; // journal / conference / workshop
  year: number;
  type?: "journal" | "conference" | "workshop" | "preprint" | "thesis";
  doi?: string; // e.g. "10.1000/xyz123"
  pdf?: string; // link to a PDF
  code?: string; // link to a repository
  url?: string; // any other link (project page, publisher, ...)
  note?: string; // short extra note, e.g. "Best paper award"
}

export const publications: Publication[] = [
  // ---- EXAMPLE ENTRY — replace with your own, or delete once you have real ones ----
  {
    authors: "K. Meersman, A. Colleague, S. Supervisor",
    title:
      "A placeholder title: replace this entry in src/data/publications.ts",
    venue: "LEUKOS — Journal of the Illuminating Engineering Society",
    year: 2025,
    type: "journal",
    doi: "",
    pdf: "",
    code: "",
    note: "Example entry — delete me.",
  },
];
