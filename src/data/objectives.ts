// ---------------------------------------------------------------------------
//  RESEARCH OBJECTIVES
//  Each objective pairs the question I'm trying to answer (the challenge) with
//  what I actually do about it (the task). Taken from my PhD symposium poster.
// ---------------------------------------------------------------------------

export interface Objective {
  title: string;
  challenge: string;
  task: string;
  tags?: string[];
}

export const objectives: Objective[] = [
  {
    title: "A digital twin of the room",
    challenge: "How can we quantify visual and non-visual stimuli?",
    task: "Build and validate a digital twin for real indoor environments.",
    tags: ["digital twin", "daylight simulation", "spectral modelling"],
  },
  {
    title: "Making VR physically accurate",
    challenge: "How can we make VR physically accurate?",
    task: "Calibrate VR for realistic eye-level exposure.",
    tags: ["virtual reality", "calibration", "photometry"],
  },
  {
    title: "Metrics for adaptive, non-uniform lighting",
    challenge:
      "How do existing metrics perform in adaptive, non-uniform lighting?",
    task: "Compare human response metrics and refine them for adaptive lighting.",
    tags: ["lighting metrics", "visual comfort", "melanopic"],
  },
  {
    title: "From metrics to practical control",
    challenge: "How can we turn metric insights into practical control?",
    task: "Test context-aware control strategies against an optimal benchmark.",
    tags: ["control", "context-aware", "energy efficiency"],
  },
];
