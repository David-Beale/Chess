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

  useEffect(() => {
    const pathName = window.location.pathname.slice(1);
    if (!pathName || pathName.length !== 8) return;
    socket.connect();
    socket.on("connect", () => {
      socket.emit("join game", pathName);
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
      console.log("join failed");
      socket.disconnect();
      window.history.replaceState("", "", window.location.origin);
    });
    return cleanUp;
  }, [setMode, setPlayerColor, startNewGame]);
};
