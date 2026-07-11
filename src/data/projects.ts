// ---------------------------------------------------------------------------
//  RESEARCH PROJECTS / TOPICS
//  Each entry becomes a card on the Research page. Keep the descriptions short
//  and plain-language — this page is often read by people outside your field.
// ---------------------------------------------------------------------------

export interface Project {
  title: string;
  period?: string; // e.g. "2024 – present"
  summary: string;
  tags?: string[];
  url?: string; // optional link to a project page or repo
}

export const projects: Project[] = [
  {
    title: "PhD project (working title)",
    period: "2024 – present",
    summary:
      "Replace this with a two- or three-sentence description of your main PhD topic — the question you're asking, why it matters, and your approach. Edit this in src/data/projects.ts.",
    tags: ["light & lighting", "human-centric lighting"],
  },
  {
    title: "A side project or collaboration",
    period: "2025",
    summary:
      "A shorter entry for a smaller project, tool, or collaboration. Delete this one if you don't need it yet.",
    tags: ["measurement", "data analysis"],
  },
];
