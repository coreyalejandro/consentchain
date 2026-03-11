import "./index.css";
import { Composition } from "remotion";
import { ProactiveDemo } from "./ProactiveDemo";
import {
  SCENES,
  FADE_DURATION_FRAMES,
  FPS,
  WIDTH,
  HEIGHT,
} from "./config/scenes";

const totalDuration =
  SCENES.reduce((sum, scene) => sum + scene.durationInFrames, 0) -
  FADE_DURATION_FRAMES * (SCENES.length - 1);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ProactiveDemo"
      component={ProactiveDemo}
      durationInFrames={totalDuration}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};
