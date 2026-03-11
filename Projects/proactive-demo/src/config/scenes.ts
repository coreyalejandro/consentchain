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
    durationInFrames: 90,
    title: "PROACTIVE \u2014 Constitutional AI Safety Agent",
    subtitle: "GitLab AI Hackathon Demo",
  },
  {
    id: "repo-context",
    type: "video",
    durationInFrames: 25 * FPS,
    startSec: 10,
    endSec: 35,
    captions: [
      { text: "Opening demonstration merge request", startSec: 3, endSec: 10 },
    ],
  },
  {
    id: "open-mr",
    type: "video",
    durationInFrames: 30 * FPS,
    startSec: 60,
    endSec: 90,
    captions: [
      { text: "Code claims a full implementation", startSec: 5, endSec: 15 },
      { text: "Implementation missing", startSec: 18, endSec: 28 },
    ],
    zoom: { startSec: 5, scale: 1.08, durationSec: 3 },
  },
  {
    id: "missing-impl",
    type: "video",
    durationInFrames: 25 * FPS,
    startSec: 120,
    endSec: 145,
    captions: [
      {
        text: "PROACTIVE agent reviewing the merge request",
        startSec: 3,
        endSec: 15,
      },
    ],
  },
  {
    id: "proactive-review",
    type: "video",
    durationInFrames: 40 * FPS,
    startSec: 200,
    endSec: 240,
    captions: [
      { text: "Invariant violation detected", startSec: 5, endSec: 15 },
      { text: "Phantom completion (I2)", startSec: 20, endSec: 35 },
    ],
    zoom: { startSec: 8, scale: 1.06, durationSec: 3 },
  },
  {
    id: "violations",
    type: "video",
    durationInFrames: 30 * FPS,
    startSec: 300,
    endSec: 330,
    captions: [
      { text: "False confident claims (F1)", startSec: 3, endSec: 13 },
      {
        text: "Merge blocked by constitutional enforcement",
        startSec: 16,
        endSec: 28,
      },
    ],
    zoom: { startSec: 16, scale: 1.08, durationSec: 3 },
  },
  {
    id: "closing",
    type: "title",
    durationInFrames: 90,
    title: "PROACTIVE \u2014 Constitutional AI Safety for SDLC",
    subtitle: "",
  },
];

export const FADE_DURATION_FRAMES = 15;
