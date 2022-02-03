import { useEffect, useState } from "react";
import { useStore } from "../Store/store";
import { socket } from "./socket";

const cleanUp = () => {
  socket.off("connect");
  socket.off("disconnect");
  socket.off("game id");
  socket.off("player connected");
};
export const useSocket = () => {
  const setConnected = useStore((state) => state.setConnected);
  const setLink = useStore((state) => state.setLink);
  const setPartnerConnected = useStore((state) => state.setPartnerConnected);
  const resetSocket = useStore((state) => state.resetSocket);
  const [createGame, setCreateGame] = useState(false);

  const connect = () => {
    resetSocket();
    setCreateGame(true);
    if (!socket.id) socket.connect();
  };

  const newGame = (color) => {
    socket.emit("new game", color);
  };

  useEffect(() => {
    if (!createGame) return;
    socket.on("connect", () => {
      setConnected(true);
    });
    socket.on("disconnect", () => {
      setConnected(false);
      setCreateGame(false);
      cleanUp();
    });
    socket.on("game id", (gameId) => {
      setLink(
        `${window.location.origin + window.location.pathname}#/${gameId}`
      );
    });
    socket.on("player connected", () => {
      setPartnerConnected(true);
    });

    return cleanUp;
  }, [createGame, setConnected, setLink, setPartnerConnected]);

  return [connect, newGame];
};
