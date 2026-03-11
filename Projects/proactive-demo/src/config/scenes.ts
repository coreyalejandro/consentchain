export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

type CaptionConfig = {
  readonly text: string;
  readonly startSec: number;
  readonly endSec: number;
};

type ZoomConfig = {
  readonly startSec: number;
  readonly scale: number;
  readonly durationSec: number;
};

type TitleScene = {
  readonly id: string;
  readonly type: "title";
  readonly durationInFrames: number;
  readonly title: string;
  readonly subtitle: string;
};

type VideoScene = {
  readonly id: string;
  readonly type: "video";
  readonly durationInFrames: number;
  readonly startSec: number;
  readonly endSec: number;
  readonly captions: ReadonlyArray<CaptionConfig>;
  readonly zoom?: ZoomConfig;
};

export type SceneConfig = TitleScene | VideoScene;

export const SCENES: ReadonlyArray<SceneConfig> = [
  {
    id: "intro",
    type: "title",
    durationInFrames: 150,
    title: "PROACTIVE \u2014 Constitutional AI Safety Agent",
    subtitle: "GitLab AI Hackathon Demo",
  },
  {
    id: "repo-context",
    type: "video",
    durationInFrames: 45 * FPS,
    startSec: 5,
    endSec: 50,
    captions: [
      { text: "Opening demonstration merge request", startSec: 3, endSec: 12 },
      {
        text: "Reviewing repository structure and context",
        startSec: 20,
        endSec: 35,
      },
    ],
  },
  {
    id: "open-mr",
    type: "video",
    durationInFrames: 50 * FPS,
    startSec: 55,
    endSec: 105,
    captions: [
      { text: "Code claims a full implementation", startSec: 5, endSec: 18 },
      { text: "But key functions are empty stubs", startSec: 22, endSec: 35 },
      { text: "Implementation missing", startSec: 38, endSec: 48 },
    ],
    zoom: { startSec: 5, scale: 1.08, durationSec: 3 },
  },
  {
    id: "missing-impl",
    type: "video",
    durationInFrames: 40 * FPS,
    startSec: 110,
    endSec: 150,
    captions: [
      {
        text: "PROACTIVE agent reviewing the merge request",
        startSec: 3,
        endSec: 15,
      },
      {
        text: "Constitutional principles guide the analysis",
        startSec: 20,
        endSec: 35,
      },
    ],
  },
  {
    id: "proactive-review",
    type: "video",
    durationInFrames: 60 * FPS,
    startSec: 155,
    endSec: 215,
    captions: [
      { text: "Invariant violation detected", startSec: 5, endSec: 18 },
      { text: "Phantom completion (I2)", startSec: 22, endSec: 38 },
      {
        text: "Agent traces evidence through code paths",
        startSec: 42,
        endSec: 55,
      },
    ],
    zoom: { startSec: 8, scale: 1.06, durationSec: 3 },
  },
  {
    id: "violations",
    type: "video",
    durationInFrames: 50 * FPS,
    startSec: 220,
    endSec: 270,
    captions: [
      { text: "False confident claims (F1)", startSec: 3, endSec: 16 },
      {
        text: "Constitutional violations summarized",
        startSec: 20,
        endSec: 33,
      },
      {
        text: "Merge blocked by constitutional enforcement",
        startSec: 36,
        endSec: 48,
      },
    ],
    zoom: { startSec: 36, scale: 1.08, durationSec: 3 },
  },
  {
    id: "closing",
    type: "title",
    durationInFrames: 150,
    title: "PROACTIVE \u2014 Constitutional AI Safety for SDLC",
    subtitle: "",
  },
];

export const FADE_DURATION_FRAMES = 15;
