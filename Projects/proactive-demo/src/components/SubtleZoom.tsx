import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type SubtleZoomProps = {
  readonly startSec: number;
  readonly scale: number;
  readonly durationSec: number;
  readonly children: React.ReactNode;
};

export const SubtleZoom: React.FC<SubtleZoomProps> = ({
  startSec,
  scale,
  durationSec,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = startSec * fps;
  const endFrame = (startSec + durationSec) * fps;

  const currentScale = interpolate(frame, [startFrame, endFrame], [1, scale], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.quad),
  });

  return (
    <AbsoluteFill
      style={{
        transform: `scale(${currentScale})`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
