import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { THEME } from "../config/theme";

type CaptionOverlayProps = {
  readonly text: string;
};

export const CaptionOverlay: React.FC<CaptionOverlayProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: THEME.caption.bottomOffset,
      }}
    >
      <div
        style={{
          backgroundColor: THEME.colors.captionBg,
          paddingLeft: THEME.caption.paddingX,
          paddingRight: THEME.caption.paddingX,
          paddingTop: THEME.caption.paddingY,
          paddingBottom: THEME.caption.paddingY,
          borderRadius: THEME.caption.borderRadius,
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <span
          style={{
            fontFamily: THEME.font,
            fontSize: THEME.caption.fontSize,
            fontWeight: THEME.caption.fontWeight,
            color: THEME.colors.text,
          }}
        >
          {text}
        </span>
      </div>
    </AbsoluteFill>
  );
};
