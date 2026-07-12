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
    title: "1 · A digital twin coupling adaptive light with daylight",
    period: "Objective 1",
    summary:
      "Build a physically grounded simulation framework that predicts observer-centered spectral light exposure and the illuminance distribution in a room, from both daylight and spatially adaptive electric light. It combines time- and spectrally-resolved daylight models with detailed simulation of individually driven LED elements, using rapid scene capture and surface-reflectance characterization. A key challenge is keeping enough spatial and spectral detail — via low-dimensional, photoreceptor-oriented spectral representations — while staying computationally efficient.",
    tags: ["digital twin", "daylight simulation", "spectral modelling"],
  },
  {
    title: "2 · VR as a tool for perceptual evaluation",
    period: "Objective 2",
    summary:
      "Establish a rigorous link between physically measurable light exposure at the eye and perceptual responses in VR. I compare real-world light exposure measured at the eye with the same scenes rendered in an immersive headset, then combine those objective measurements with controlled subjective evaluations to see how physical discrepancies affect perception — and how to refine the visualization pipeline for maximum perceptual fidelity.",
    tags: ["virtual reality", "perception", "photometry"],
  },
  {
    title: "3 · Metrics for adaptive, non-uniform lighting",
    period: "Objective 3",
    summary:
      "Refine and extend visual and non-visual lighting metrics so they apply to spatially adaptive, non-uniform, daylight-integrated conditions. Current metrics treat task-plane illuminance and field-of-view luminance separately and for fixed viewpoints. Using the immersive framework, I assess how they hold up under dynamic, non-uniform light and develop indicators that better capture visual comfort, perceptual quality, and non-visual impact.",
    tags: ["lighting metrics", "visual comfort", "melanopic"],
  },
  {
    title: "4 · Control strategies for spatially adaptive luminaires",
    period: "Objective 4",
    summary:
      "Move beyond fixed setpoints, schedules, and uniform dimming toward context-aware control that exploits the spatial, spectral, and temporal degrees of freedom of adaptive luminaires — using user position, viewing direction, task, and daylight conditions. The refined metrics from Objective 3 become the optimization targets, tying control directly to visual comfort, circadian-effective exposure, and energy performance.",
    tags: ["control", "context-aware", "energy efficiency"],
  },
];
