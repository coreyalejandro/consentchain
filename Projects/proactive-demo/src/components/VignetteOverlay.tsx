import { AbsoluteFill } from "remotion";

type VignetteOverlayProps = {
  readonly intensity?: number;
};

export const VignetteOverlay: React.FC<VignetteOverlayProps> = ({
  intensity = 0.6,
}) => {
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(
          ellipse 80% 80% at 50% 50%,
          transparent 50%,
          rgba(0, 0, 0, ${intensity}) 100%
        )`,
        pointerEvents: "none",
      }}
    />
  );
};
