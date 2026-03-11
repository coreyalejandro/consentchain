import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { THEME } from "../config/theme";

type TitleCardProps = {
  readonly title: string;
  readonly subtitle: string;
};

export const TitleCard: React.FC<TitleCardProps> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleEntrance = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const subtitleEntrance = spring({
    frame,
    fps,
    config: { damping: 200 },
    delay: 8,
  });

  const titleOpacity = interpolate(titleEntrance, [0, 1], [0, 1]);
  const titleTranslateY = interpolate(titleEntrance, [0, 1], [30, 0]);

  const subtitleOpacity = interpolate(subtitleEntrance, [0, 1], [0, 1]);
  const subtitleTranslateY = interpolate(subtitleEntrance, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: THEME.colors.background,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: THEME.font,
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          transform: `translateY(${titleTranslateY}px)`,
          fontSize: THEME.title.mainSize,
          fontWeight: 700,
          color: THEME.colors.text,
          textAlign: "center",
          maxWidth: 1400,
          lineHeight: 1.2,
        }}
      >
        {title}
      </div>
      {subtitle ? (
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleTranslateY}px)`,
            fontSize: THEME.title.subSize,
            fontWeight: 400,
            color: THEME.colors.textMuted,
            marginTop: 24,
            textAlign: "center",
          }}
        >
          {subtitle}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
