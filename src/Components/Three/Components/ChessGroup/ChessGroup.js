import useChessSet from "./useChessSet";
import Board from "./Board/Board";
import Moves from "./Moves/Moves";
import Pieces from "./Pieces/Pieces";
import { useEffect, useRef } from "react";
import { useStore } from "../../../../Store/store";
import { useFrame } from "@react-three/fiber";
import { easeSinInOut } from "d3-ease";

export default function ChessGroup() {
  const chessRef = useRef();
  const chessSet = useChessSet();
  const progress = useRef(2);
  const newGame = useStore((state) => state.newGame);
  const prevColor = useRef("white");
  const target = useRef(0);
  const source = useRef(0);

  useEffect(() => {
    const [color] = newGame;
    if (prevColor.current === color) return;
    prevColor.current = color;
    progress.current = 0;
    source.current = color === "white" ? Math.PI : 0;
    target.current = color === "white" ? 0 : Math.PI;
  }, [newGame]);

  useFrame(() => {
    if (progress.current > 1) return;
    progress.current += 0.02;
    const easing = easeSinInOut(progress.current);
    chessRef.current.rotation.y =
      (1 - easing) * source.current + easing * target.current;
  });

  return (
    <group ref={chessRef}>
      <Board board={chessSet.board} />
      <Pieces chessSet={chessSet} />
      <Moves />
    </group>
  );
}
