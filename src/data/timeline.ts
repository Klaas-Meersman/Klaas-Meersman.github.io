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
  detail?: string;
  url?: string; // optional link (event page, paper, ...)
}

export const timeline: Milestone[] = [
  {
    date: "2026-04-20",
    display: "20–23 Apr 2026",
    title: "Spring School on Social XR — CWI Amsterdam",
    detail:
      "Attended the Social XR Spring School at CWI Amsterdam to deepen my immersive-technology skills for lighting research.",
    url: "https://www.dis.cwi.nl/spring-school/",
  },
  {
    date: "2025-11-15",
    display: "Nov 2025",
    title: "Started my PhD at KU Leuven",
    detail:
      "Joined the Light & Lighting Laboratory to work on VR and digital twins for human-centric, spatially adaptive lighting.",
  },
];
