// Model Information:
// * title:	Chess Board - #3December2020 Day4 - Board Game
// * source:	https://sketchfab.com/3d-models/chess-board-3december2020-day4-board-game-12f3187003da4241bf8210b86cfa00f5
// * author:	LordDiego (https://sketchfab.com/LordDiego)
import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import gltf from "../../Assets/chess.glb";

export default function useChessSet() {
  const { nodes } = useGLTF(gltf);

  const objects = useMemo(() => {
    return {
      board: {
        geometry1: nodes.Chess_Board_WoodDark_0.geometry,
        geometry2: nodes.Chess_Board_Wood_0.geometry,
        material1: nodes.Chess_Board_WoodDark_0.material,
        material2: nodes.Chess_Board_Wood_0.material,
      },
      P: {
        geometry: nodes.Pawn_White_Wood_0.geometry,
        material: nodes.Pawn_White_Wood_0.material,
        rotation: -Math.PI / 2,
      },
      N: {
        geometry: nodes.Knight_White_Wood_0.geometry,
        material: nodes.Knight_White_Wood_0.material,
        rotation: -Math.PI / 2,
      },
      B: {
        geometry: nodes.Bishop_White_Wood_0.geometry,
        material: nodes.Bishop_White_Wood_0.material,
        rotation: -Math.PI / 2,
      },
      R: {
        geometry: nodes.Rook_White_Wood_0.geometry,
        material: nodes.Rook_White_Wood_0.material,
        rotation: -Math.PI / 2,
      },
      Q: {
        geometry: nodes.Queen_White_Wood_0.geometry,
        material: nodes.Queen_White_Wood_0.material,
        rotation: -Math.PI / 2,
      },
      K: {
        geometry: nodes.King_White_Wood_0.geometry,
        material: nodes.King_White_Wood_0.material,
        rotation: -Math.PI / 2,
      },
      p: {
        geometry: nodes.Pawn_White008_WoodDark_0.geometry,
        material: nodes.Pawn_White008_WoodDark_0.material,
        rotation: -Math.PI / 2,
      },
      n: {
        geometry: nodes.Knight_White002_WoodDark_0.geometry,
        material: nodes.Knight_White002_WoodDark_0.material,
        rotation: Math.PI / 2,
      },
      b: {
        geometry: nodes.Bishop_White002_WoodDark_0.geometry,
        material: nodes.Bishop_White002_WoodDark_0.material,
        rotation: -Math.PI / 2,
      },
      r: {
        geometry: nodes.Rook_Black_WoodDark_0.geometry,
        material: nodes.Rook_Black_WoodDark_0.material,
        rotation: -Math.PI / 2,
      },
      q: {
        geometry: nodes.Queen_White001_WoodDark_0.geometry,
        material: nodes.Queen_White001_WoodDark_0.material,
        rotation: -Math.PI / 2,
      },
      k: {
        geometry: nodes.King_White001_WoodDark_0.geometry,
        material: nodes.King_White001_WoodDark_0.material,
        rotation: -Math.PI / 2,
      },
    };
  }, [nodes]);
  return objects;
}

useGLTF.preload("/chess.glb");
