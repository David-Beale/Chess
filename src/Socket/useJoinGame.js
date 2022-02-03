import { useEffect } from "react";
import { useStore } from "../Store/store";
import { socket } from "./socket";

const cleanUp = () => {
  socket.off("connect");
  socket.off("disconnect");
  socket.off("player connected");
  socket.off("error joining game");
};
export const useJoinGame = () => {
  const startNewGame = useStore((state) => state.startNewGame);
  const setPlayerColor = useStore((state) => state.setPlayerColor);
  const setMode = useStore((state) => state.setMode);
  const setErrorJoining = useStore((state) => state.setErrorJoining);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    socket.connect();
    socket.on("connect", () => {
      socket.emit("join game", hash.slice(2));
    });
    socket.on("disconnect", () => {
      cleanUp();
    });

    socket.on("player connected", (color) => {
      startNewGame(color);
      setPlayerColor(color);
      setMode("pvp");
    });

    socket.on("error joining game", () => {
      setErrorJoining();
      socket.disconnect();
      window.history.replaceState(
        "",
        "",
        window.location.origin + window.location.pathname
      );
    });
    return cleanUp;
  }, [setMode, setPlayerColor, startNewGame, setErrorJoining]);
};
