import { useEffect, useRef } from "react";
import { useStore } from "../Store/store";
const worker = new Worker("./chess/chessWorker.js");

const calcTimeout = (timer) => {
  if (!timer) return 0;
  const diff = Date.now() - timer;
  if (diff > 1000) return 0;
  return 1000 - diff;
};
export default function useBoard() {
  const from = useStore((state) => state.currentSelected);
  const to = useStore((state) => state.target);
  const timer = useRef();

  const fromRef = useRef(null);

  const initPlayer = useStore((state) => state.initPlayer);
  const resetClicks = useStore((state) => state.resetClicks);
  const setCheck = useStore((state) => state.setCheck);
  const setCheckMate = useStore((state) => state.setCheckMate);
  const setPieces = useStore((state) => state.setPieces);
  const setAllMoves = useStore((state) => state.setAllMoves);
  const setCurrentPlayer = useStore((state) => state.setCurrentPlayer);
  const newGame = useStore((state) => state.newGame);

  useEffect(() => {
    initPlayer("white");
    worker.postMessage({ type: "init" });
  }, [initPlayer, newGame]);

  useEffect(() => {
    worker.onmessage = (e) => {
      const { moves, pieces, check, checkMate, turn } = e.data;
      const timeout = calcTimeout(timer.current);
      setTimeout(() => {
        setAllMoves(moves);
        setPieces(pieces);
        resetClicks();
        setCheck(check);
        setCurrentPlayer(turn);
        setCheckMate(checkMate);
        timer.current = Date.now();
      }, timeout);
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
    worker.postMessage({ type: "move", from: fromRef.current, to });
    worker.postMessage({ type: "aiMove" });
  }, [to]);
}
