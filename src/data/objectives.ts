// ---------------------------------------------------------------------------
//  RESEARCH OBJECTIVES
//  Each objective is a short paragraph: the question I'm trying to answer,
//  followed by what I actually do about it. Taken from my PhD symposium poster.
// ---------------------------------------------------------------------------

export interface Objective {
  title: string;
  description: string;
}

export const objectives: Objective[] = [
  {
    title: "A digital twin of the room",
    description:
      "How can we quantify visual and non-visual stimuli? I build and validate a digital twin for real indoor environments.",
  },
  {
    title: "Making VR physically accurate",
    description:
      "How can we make VR physically accurate? I calibrate VR for realistic eye-level exposure.",
  },
  {
    title: "Metrics for adaptive, non-uniform lighting",
    description:
      "How do existing metrics perform in adaptive, non-uniform lighting? I compare human response metrics and refine them for adaptive lighting.",
  },
  {
    title: "From metrics to practical control",
    description:
      "How can we turn metric insights into practical control? I test context-aware control strategies against an optimal benchmark.",
  },
];
