import { AbsoluteFill, Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { SCENES, FADE_DURATION_FRAMES } from "./config/scenes";
import { TitleCard } from "./scenes/TitleCard";
import { VideoSegment } from "./scenes/VideoSegment";

export const ProactiveDemo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile("voiceover.mp3")} volume={1} />
      <TransitionSeries>
      {SCENES.map((scene, index) => {
        const isLast = index === SCENES.length - 1;

        return [
          <TransitionSeries.Sequence
            key={scene.id}
            durationInFrames={scene.durationInFrames}
          >
            {scene.type === "title" ? (
              <TitleCard title={scene.title} subtitle={scene.subtitle} />
            ) : (
              <VideoSegment
                startSec={scene.startSec}
                endSec={scene.endSec}
                captions={scene.captions}
                zoom={scene.zoom}
              />
            )}
          </TransitionSeries.Sequence>,
          !isLast ? (
            <TransitionSeries.Transition
              key={`${scene.id}-transition`}
              presentation={fade()}
              timing={linearTiming({
                durationInFrames: FADE_DURATION_FRAMES,
              })}
            />
          ) : null,
        ];
      })}
      </TransitionSeries>
    </AbsoluteFill>
  );
};
