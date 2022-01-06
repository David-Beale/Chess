import { useEffect, useRef } from "react";
import { socket } from "../Socket/socket";
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

  const resetClicks = useStore((state) => state.resetClicks);
  const setCheck = useStore((state) => state.setCheck);
  const setCheckMate = useStore((state) => state.setCheckMate);
  const setPieces = useStore((state) => state.setPieces);
  const setAllMoves = useStore((state) => state.setAllMoves);
  const setCurrentPlayer = useStore((state) => state.setCurrentPlayer);
  const newGame = useStore((state) => state.newGame);
  const aiLevel = useStore((state) => state.aiLevel);
  const mode = useStore((state) => state.mode);

  useEffect(() => {
    const [color] = newGame;
    worker.postMessage({ type: "init", color, mode });
  }, [newGame, mode]);

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
    if (mode === "ai") worker.postMessage({ type: "aiMove" });
    else socket.emit("move", { from: fromRef.current, to });
  }, [to, mode]);

  useEffect(() => {
    worker.postMessage({ type: "aiLevel", aiLevel });
  }, [aiLevel]);

  useEffect(() => {
    if (mode !== "pvp") return;
    socket.on("move", ({ from, to }) => {
      worker.postMessage({ type: "move", from, to });
    });
    return () => {
      socket.off("move");
    };
  }, [mode]);
}
