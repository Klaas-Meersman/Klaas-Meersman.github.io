// ---------------------------------------------------------------------------
//  RESEARCH OBJECTIVES
//  Each objective has a title and a small icon (drawn in
//  src/components/ObjectiveIcon.astro). `label` is the task in words; it is
//  not shown on the page but read out by screen readers in place of the icon.
//  Taken from my PhD symposium poster.
// ---------------------------------------------------------------------------

export interface Objective {
  title: string;
  icon: "twin" | "vr" | "metrics" | "control";
  label: string;
}

export const objectives: Objective[] = [
  {
    title: "A digital twin of the room",
    icon: "twin",
    label: "Build and validate a digital twin for real indoor environments.",
  },
  {
    title: "Making VR physically accurate",
    icon: "vr",
    label: "Calibrate VR for realistic eye-level exposure.",
  },
  {
    title: "Metrics for adaptive, non-uniform lighting",
    icon: "metrics",
    label: "Compare human response metrics and refine them for adaptive lighting.",
  },
  {
    title: "From metrics to practical control",
    icon: "control",
    label: "Test context-aware control strategies against an optimal benchmark.",
  },
];
