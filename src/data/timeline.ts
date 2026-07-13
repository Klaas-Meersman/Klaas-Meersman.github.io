// ---------------------------------------------------------------------------
//  TIMELINE / NEWS
//  Milestones shown as a vertical timeline on the home page. Add a new entry at
//  the top of the list whenever something happens — talks, papers, courses,
//  awards, research stays. They are sorted by `date` automatically.
// ---------------------------------------------------------------------------

export interface Milestone {
  // Sortable date, "YYYY-MM-DD" or "YYYY-MM". Used only for ordering.
  date: string;
  // Human-friendly label shown on the timeline, e.g. "Nov 2025".
  display: string;
  title: string;
  // May contain simple HTML, so you can put links inside the sentence,
  // e.g. 'supervised by <a href="https://...">Stijn Volckaert</a>.'
  detail?: string;
  url?: string; // optional link on the title itself (event page, paper, ...)
}

export const timeline: Milestone[] = [
  {
    date: "2026-07-02",
    display: "2 Jul 2026",
    title:
      'Presented at the <a href="https://set.kuleuven.be/phd/seminars/wavecore-phd-symposium">WaveCoRE PhD Symposium</a>, KU Leuven Campus Bruges',
    detail: '<a href="/papers/phd-symposium-poster.pdf">Poster (PDF)</a>',
  },
  {
    date: "2026-04-20",
    display: "20–23 Apr 2026",
    title:
      'Spring School on Social XR — <a href="https://www.dis.cwi.nl/spring-school/">CWI Amsterdam</a>',
    detail:
      'Presented the same poster (<a href="/papers/phd-symposium-poster.pdf">PDF</a>).',
  },
  {
    date: "2025-11-15",
    display: "Nov 2025",
    title:
      'Started my PhD at the <a href="https://iiw.kuleuven.be/onderzoek/lichttechnologie/home/">Light &amp; Lighting Laboratory</a>, KU Leuven',
    detail:
      'Working on VR and digital twins for human-centric, spatially adaptive lighting. Promotors: <a href="https://www.kuleuven.be/wieiswie/en/person/00089830">Prof. Youri Meuret</a>, <a href="https://www.kuleuven.be/wieiswie/en/person/00153950">Prof. Maria Torres Vega</a>, and <a href="https://www.kuleuven.be/wieiswie/en/person/00058788">Prof. Wouter Ryckaert</a>.',
  },
  {
    date: "2025-09",
    display: "Sep 2025",
    title: "Graduated Magna Cum Laude from MSc in Engineering Technology at KU Leuven, Ghent Campus",
    detail:
      'Master\'s thesis: <em>Studying in-process memory isolation mechanisms</em>, supervised by <a href="https://stijn-volckaert.github.io/personal/">Prof. Stijn Volckaert</a>.',
  },
];
