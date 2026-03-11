import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "700"],
  subsets: ["latin"],
});

export const THEME = {
  font: fontFamily,
  colors: {
    background: "#0f172a",
    text: "#f8fafc",
    textMuted: "#94a3b8",
    captionBg: "rgba(0, 0, 0, 0.65)",
  },
  caption: {
    fontSize: 36,
    fontWeight: "500" as const,
    paddingX: 32,
    paddingY: 16,
    borderRadius: 8,
    bottomOffset: 80,
  },
  title: {
    mainSize: 64,
    subSize: 32,
  },
} as const;
