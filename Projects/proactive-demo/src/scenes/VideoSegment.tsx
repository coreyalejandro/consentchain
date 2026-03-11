import { AbsoluteFill, Sequence, staticFile, useVideoConfig } from "remotion";
import { Video } from "@remotion/media";
import { CaptionOverlay } from "../components/CaptionOverlay";
import { SubtleZoom } from "../components/SubtleZoom";

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

type VideoSegmentProps = {
  readonly startSec: number;
  readonly endSec: number;
  readonly captions: ReadonlyArray<CaptionConfig>;
  readonly zoom?: ZoomConfig;
};

export const VideoSegment: React.FC<VideoSegmentProps> = ({
  startSec,
  endSec,
  captions,
  zoom,
}) => {
  const { fps } = useVideoConfig();

  const videoContent = (
    <Video
      src={staticFile("demo-raw.mp4")}
      trimBefore={startSec * fps}
      trimAfter={endSec * fps}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );

  return (
    <AbsoluteFill>
      {zoom ? (
        <SubtleZoom
          startSec={zoom.startSec}
          scale={zoom.scale}
          durationSec={zoom.durationSec}
        >
          {videoContent}
        </SubtleZoom>
      ) : (
        videoContent
      )}

      {captions.map((caption) => {
        const fromFrame = Math.round(caption.startSec * fps);
        const durationInFrames = Math.round(
          (caption.endSec - caption.startSec) * fps,
        );

        return (
          <Sequence
            key={caption.text}
            from={fromFrame}
            durationInFrames={durationInFrames}
            layout="none"
          >
            <CaptionOverlay text={caption.text} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
