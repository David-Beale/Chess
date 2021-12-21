import { Canvas } from "@react-three/fiber";
import {
  Box,
  OrbitControls,
  Plane,
  Sky,
  Stars,
  Stats,
} from "@react-three/drei";
import Board from "./Components/Board/Board";
import Effects from "./Effects/Effects";
import NoEffects from "./NoEffects/NoEffects";
import useChessSet from "./useChessSet";
import Pieces from "./Components/Pieces/Pieces";
import { useRef } from "react";
import Lighting from "./Components/Lighting/Lighting";

export default function Three() {
  const chessSet = useChessSet();
  const boardRef = useRef();

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

          <Board board={chessSet.board} boardRef={boardRef} />
          <Pieces chessSet={chessSet} />
        </group>
      </NoEffects>
      <Effects>
        <Sky distance={45000} inclination={0.48} rayleigh={4} />
        <group position={[0, 0, 0]}>
          <Stars radius={175} />
        </group>
      </Effects>
      <Stats className="stats" />
      <OrbitControls target={[0, 0, 0]} />
    </Canvas>
  );
}
