import { Canvas } from "@react-three/fiber";
import { Sky, Stars, Stats } from "@react-three/drei";
import Effects from "./Effects/Effects";
import NoEffects from "./NoEffects/NoEffects";
import Lighting from "./Components/Lighting/Lighting";
import Camera from "./Components/Camera/Camera";
import ChessGroup from "./Components/ChessGroup/ChessGroup";

export default function Three() {
  return (
    <Canvas
      className="canvas"
      camera={{
        position: [0, 50, 50],
        fov: 45,
        far: 50000,
      }}
      shadows
    >
      <NoEffects>
        <group position={[0, 0, 0]}>
          <Lighting />
          <ChessGroup />
        </group>
      </NoEffects>
      <Effects>
        <Sky distance={45000} inclination={0.48} rayleigh={4} />
        <group position={[0, 0, 0]}>
          <Stars radius={175} />
        </group>
      </Effects>
      <Stats className="stats" />
      <Camera />
    </Canvas>
  );
}
