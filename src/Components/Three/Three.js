import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sky, Stars, Stats } from "@react-three/drei";
import Board from "./Components/Board/Board";
import Effects from "./Effects/Effects";
import NoEffects from "./NoEffects/NoEffects";

export default function Three() {
  return (
    <Canvas
      className="canvas"
      camera={{
        position: [0, 2000, 35],
        fov: 45,
        far: 50000,
      }}
      shadows
    >
      <NoEffects>
        <ambientLight intensity={1} />
        <pointLight intensity={1} position={[0, 2035, 0]} />
        <directionalLight intensity={1} position={[0, 2035, 35]} />
        <Board position={[0, 2000, 0]} rotation={[0, Math.PI / 2, 0]} />
      </NoEffects>
      <Effects>
        <Sky distance={45000} inclination={0.48} rayleigh={4} />
        <group position={[0, 2000, 0]}>
          <Stars radius={175} />
        </group>
      </Effects>
      <Stats className="stats" />
      <OrbitControls target={[0, 2000, 0]} />
    </Canvas>
  );
}
