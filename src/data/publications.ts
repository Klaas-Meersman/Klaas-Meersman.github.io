// ---------------------------------------------------------------------------
//  PUBLICATIONS
//  Add each paper as an object in the list below. The newest should go first.
//  Only `authors`, `title`, `venue`, and `year` are required — the rest are
//  optional links that only appear when you fill them in.
// ---------------------------------------------------------------------------

export interface Publication {
  authors: string;
  title: string;
  venue: string; // journal / conference / symposium / workshop
  year: number;
  type?:
    | "journal"
    | "conference"
    | "workshop"
    | "poster"
    | "preprint"
    | "thesis";
  doi?: string; // e.g. "10.1000/xyz123"
  pdf?: string; // link to a PDF
  code?: string; // link to a repository
  url?: string; // any other link (project page, publisher, ...)
  note?: string; // short extra note, e.g. "Best paper award"
}

export const publications: Publication[] = [
  {
    authors: "K. Meersman, Y. Meuret, M. Torres Vega, W. Ryckaert",
    title:
      "High-Fidelity Virtual Reality Framework for Human-centric Evaluation of Spatially Adaptive Lighting",
    venue: "WaveCoRE PhD Symposium, KU Leuven Campus Bruges",
    year: 2026,
    type: "poster",
    pdf: "/papers/phd-symposium-poster.pdf",
    url: "https://set.kuleuven.be/phd/seminars/wavecore-phd-symposium",
    note: "Also presented at the Social XR Spring School, CWI Amsterdam.",
  },
];
