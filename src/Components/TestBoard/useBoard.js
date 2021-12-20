import { useEffect, useRef, useState, useMemo } from "react";
import Board from "./BoardClass";
import { useStore } from "../../Store/store";

export default function useBoard() {
  const [boardPositions, setBoardPositions] = useState();
  const from = useStore((state) => state.from);
  const to = useStore((state) => state.to);
  const initPlayer = useStore((state) => state.initPlayer);
  const resetClicks = useStore((state) => state.resetClicks);
  const togglePlayer = useStore((state) => state.togglePlayer);
  const setCheck = useStore((state) => state.setCheck);
  const setCheckMate = useStore((state) => state.setCheckMate);
  const fromRef = useRef(null);

  const board = useMemo(() => {
    return new Board("white");
  }, []);

  useEffect(() => {
    initPlayer({ myColor: "white", currentPlayer: "white" });
    setBoardPositions(board.getBoardPositions());
  }, [board, initPlayer]);

  useEffect(() => {
    fromRef.current = from;
  }, [from]);

  useEffect(() => {
    if (!to) return;
    board.move(fromRef.current, to);
    setBoardPositions(board.getBoardPositions());
    // togglePlayer();
    resetClicks();
    // board.aiMove();
    const [check, checkMate] = board.isChecked();
    setCheck(check);
    setCheckMate(checkMate);
  }, [board, to, resetClicks, togglePlayer, setCheck, setCheckMate]);
  return boardPositions;
}
