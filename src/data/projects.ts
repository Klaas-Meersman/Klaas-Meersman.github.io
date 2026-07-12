// ---------------------------------------------------------------------------
//  RESEARCH PROJECTS / OBJECTIVES
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
    title: "A digital twin that couples adaptive light with daylight",
    period: "Objective 1",
    summary:
      "Simulate the light actually reaching someone's eye, from both the daylight and the adaptive luminaire. The trick is keeping enough spectral detail to get the non-visual effects right without the compute cost blowing up.",
    tags: ["digital twin", "daylight simulation", "spectral modelling"],
  },
  {
    title: "VR as a tool for perceptual evaluation",
    period: "Objective 2",
    summary:
      "Measure real light at the eye, then render the same scene in a headset and measure again. Where the two drift apart, find out whether it actually changes what people perceive.",
    tags: ["virtual reality", "perception", "photometry"],
  },
  {
    title: "Metrics for adaptive, non-uniform lighting",
    period: "Objective 3",
    summary:
      "Today's metrics assume uniform light and a fixed viewpoint, which adaptive lighting breaks. I test how far they stretch and build better ones where they don't.",
    tags: ["lighting metrics", "visual comfort", "melanopic"],
  },
  {
    title: "Control strategies for adaptive luminaires",
    period: "Objective 4",
    summary:
      "Go beyond fixed schedules and uniform dimming toward control that reacts to where people are, what they're doing, and the daylight. The metrics from Objective 3 become the targets to optimise for.",
    tags: ["control", "context-aware", "energy efficiency"],
  },
];
