import { useEffect, useRef } from "react";
import { useStore } from "../Store/store";
const worker = new Worker("./chess/chessWorker.js");

export default function useBoard() {
  const from = useStore((state) => state.currentSelected);
  const to = useStore((state) => state.target);

  const fromRef = useRef(null);

  const initPlayer = useStore((state) => state.initPlayer);
  const resetClicks = useStore((state) => state.resetClicks);
  const setCheck = useStore((state) => state.setCheck);
  const setCheckMate = useStore((state) => state.setCheckMate);
  const setPieces = useStore((state) => state.setPieces);
  const setAllMoves = useStore((state) => state.setAllMoves);
  const setCurrentPlayer = useStore((state) => state.setCurrentPlayer);

  useEffect(() => {
    initPlayer("white");
    worker.postMessage({ init: true });
  }, [initPlayer]);

  useEffect(() => {
    worker.onmessage = (e) => {
      const { moves, pieces, check, checkMate, turn } = e.data;
      setAllMoves(moves);
      setPieces(pieces);
      resetClicks();
      setCheck(check);
      setCurrentPlayer(turn);
      setCheckMate(checkMate);
    };
  }, [
    resetClicks,
    setCheck,
    setCheckMate,
    setPieces,
    setAllMoves,
    setCurrentPlayer,
  ]);

  useEffect(() => {
    fromRef.current = from;
  }, [from]);

  useEffect(() => {
    if (!to) return;
    worker.postMessage({ from: fromRef.current, to });
    worker.postMessage({ ai: true });
  }, [to]);
}
