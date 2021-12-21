import React from "react";
import { useGLTF } from "@react-three/drei";
import board from "../../../../Assets/board.glb";

export default function Board(props) {
  const { nodes, materials } = useGLTF(board);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chess_Board_WoodDark_0.geometry}
              material={materials.WoodDark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chess_Board_Wood_0.geometry}
              material={materials.Wood}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/board.glb");
