import { useEffect } from "react";
import { useStore } from "../Store/store";
import { socket } from "./socket";

export const useJoinGame = () => {
  const startNewGame = useStore((state) => state.startNewGame);
  const setPlayerColor = useStore((state) => state.setPlayerColor);
  const setMode = useStore((state) => state.setMode);

  useEffect(() => {
    const pathName = window.location.pathname.slice(1);
    if (!pathName || pathName.length !== 8) return;
    socket.connect();
    socket.on("connect", () => {
      console.log("connected", socket.id);
      socket.emit("join game", pathName);
    });

    socket.on("player connected", (color) => {
      console.log("joined");
      startNewGame(color);
      setPlayerColor(color);
      setMode("pvp");
    });

    socket.on("error joining game", () => {
      console.log("join failed");
    });
    return () => {
      socket.off("player connected");
      socket.off("game does not exist");
    };
  }, [setMode, setPlayerColor, startNewGame]);
};
