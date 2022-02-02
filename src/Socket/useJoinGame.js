import { useEffect } from "react";
import { useStore } from "../Store/store";
import { socket } from "./socket";

export const useJoinGame = () => {
  const startNewGame = useStore((state) => state.startNewGame);
  const setConnected = useStore((state) => state.setConnected);
  const setPlayerColor = useStore((state) => state.setPlayerColor);
  const setMode = useStore((state) => state.setMode);

  useEffect(() => {
    const pathName = window.location.pathname.slice(1);
    if (!pathName || pathName.length !== 8) return;
    socket.connect();
    socket.on("connect", () => {
      setConnected(true);
      socket.emit("join game", pathName);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });

    socket.on("player connected", (color) => {
      console.log("joined");
      startNewGame(color);
      setPlayerColor(color);
      setMode("pvp");
    });

    socket.on("error joining game", () => {
      console.log("join failed");
      window.history.replaceState("", "", window.location.origin);
    });
    return () => {
      socket.off("player connected");
      socket.off("error joining game");
    };
  }, [setMode, setPlayerColor, startNewGame, setConnected]);
};
