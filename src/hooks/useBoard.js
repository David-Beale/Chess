import { useEffect, useRef, useState } from "react";
import { useStore } from "../Store/store";
const worker = new Worker("./chess/chessWorker.js");

export default function useBoard() {
  const from = useStore((state) => state.currentSelected);
  const to = useStore((state) => state.target);

  const initPlayer = useStore((state) => state.initPlayer);
  const resetClicks = useStore((state) => state.resetClicks);
  const togglePlayer = useStore((state) => state.togglePlayer);
  const setCheck = useStore((state) => state.setCheck);
  const setCheckMate = useStore((state) => state.setCheckMate);
  const setPieces = useStore((state) => state.setPieces);
  const setAllMoves = useStore((state) => state.setAllMoves);
  const fromRef = useRef(null);

  useEffect(() => {
    initPlayer({ myColor: "white", currentPlayer: "white" });
    worker.postMessage({ init: true });
  }, [initPlayer]);

  useEffect(() => {
    worker.onmessage = (e) => {
      const { moves, pieces, check, checkMate } = e.data;
      setAllMoves(moves);
      setPieces(pieces);
      resetClicks();
      // togglePlayer();
      setCheck(check);
      setCheckMate(checkMate);
    };
  }, [resetClicks, setCheck, setCheckMate, setPieces, setAllMoves]);

  useEffect(() => {
    fromRef.current = from;
  }, [from]);

  useEffect(() => {
    if (!to) return;
    worker.postMessage({ from: fromRef.current, to });
    worker.postMessage({ ai: true });
  }, [to]);
}
