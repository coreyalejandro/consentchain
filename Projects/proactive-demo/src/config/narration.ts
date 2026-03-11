import { FPS } from "./scenes";

/**
 * Narration segments aligned to scene timings.
 * Each segment maps to the voiceover audio track.
 * Use NARRATION_SCRIPT.md in project root for voice recording.
 */

type NarrationSegment = {
  readonly sceneId: string;
  readonly startFrame: number;
  readonly text: string;
};

/**
 * These segments are for reference/subtitle fallback only.
 * The primary voiceover is delivered via public/voiceover.mp3
 * as a single continuous audio track.
 */
export const NARRATION_SEGMENTS: ReadonlyArray<NarrationSegment> = [
  // Scene 1: Intro title card (0–5s)
  {
    sceneId: "intro",
    startFrame: 0,
    text: "This is PROACTIVE — a constitutional AI safety agent built for the software development lifecycle.",
  },

  // Scene 2: Repo context (5–50s)
  {
    sceneId: "repo-context",
    startFrame: 5 * FPS,
    text: "Let me walk you through a live demonstration.",
  },
  {
    sceneId: "repo-context",
    startFrame: 12 * FPS,
    text: "Here we have a GitLab merge request. A developer has submitted what they claim is a complete feature implementation.",
  },
  {
    sceneId: "repo-context",
    startFrame: 25 * FPS,
    text: "At first glance, the code structure looks reasonable. There are files, functions, and even some documentation.",
  },
  {
    sceneId: "repo-context",
    startFrame: 37 * FPS,
    text: "But appearances can be deceiving — and that's exactly the kind of problem PROACTIVE was designed to catch.",
  },

  // Scene 3: Open MR (50–100s)
  {
    sceneId: "open-mr",
    startFrame: 55 * FPS,
    text: "Let's look more closely. The commit message says 'full implementation' — confident language.",
  },
  {
    sceneId: "open-mr",
    startFrame: 67 * FPS,
    text: "But when we inspect the actual code, several key functions are empty stubs. They have the right signatures, the right names, but no real logic inside.",
  },
  {
    sceneId: "open-mr",
    startFrame: 82 * FPS,
    text: "This is what we call phantom completion — the code presents a facade of completeness without delivering on its promises.",
  },
  {
    sceneId: "open-mr",
    startFrame: 93 * FPS,
    text: "A traditional code review might miss this. The structure looks right. But the substance is hollow.",
  },

  // Scene 4: Missing impl (100–140s)
  {
    sceneId: "missing-impl",
    startFrame: 105 * FPS,
    text: "Now watch what happens when PROACTIVE enters the picture.",
  },
  {
    sceneId: "missing-impl",
    startFrame: 113 * FPS,
    text: "The agent doesn't just scan for syntax errors or style violations. It reasons about intent versus implementation.",
  },
  {
    sceneId: "missing-impl",
    startFrame: 125 * FPS,
    text: "It applies constitutional principles — rules derived from real-world contract failures and AI safety research — to evaluate whether the code actually does what it claims.",
  },

  // Scene 5: PROACTIVE review (140–200s)
  {
    sceneId: "proactive-review",
    startFrame: 145 * FPS,
    text: "Here's the analysis in real time. PROACTIVE has identified an invariant violation.",
  },
  {
    sceneId: "proactive-review",
    startFrame: 158 * FPS,
    text: "Specifically, it's flagged phantom completion — that's violation class I2 in our constitutional framework.",
  },
  {
    sceneId: "proactive-review",
    startFrame: 172 * FPS,
    text: "The agent traces evidence through the code paths, connecting the confident claims in the commit message to the empty function bodies in the actual implementation.",
  },
  {
    sceneId: "proactive-review",
    startFrame: 187 * FPS,
    text: "This isn't a simple linter finding. This is structured reasoning about the gap between what was promised and what was delivered.",
  },

  // Scene 6: Violations (200–250s)
  {
    sceneId: "violations",
    startFrame: 205 * FPS,
    text: "The violation report surfaces another finding — false confident claims, class F1.",
  },
  {
    sceneId: "violations",
    startFrame: 218 * FPS,
    text: "The developer's language implied certainty and completeness. The code tells a different story. PROACTIVE catches that dissonance.",
  },
  {
    sceneId: "violations",
    startFrame: 232 * FPS,
    text: "And here's the enforcement. Based on the constitutional violations detected, PROACTIVE blocks the merge. The code cannot proceed until the gaps are addressed.",
  },
  {
    sceneId: "violations",
    startFrame: 244 * FPS,
    text: "This is safety-first development — catching integrity failures before they reach production.",
  },

  // Scene 7: Closing title card (250–255s)
  {
    sceneId: "closing",
    startFrame: 250 * FPS,
    text: "PROACTIVE. Constitutional AI safety for the software development lifecycle.",
  },
];
