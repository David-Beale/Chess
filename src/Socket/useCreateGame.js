import { useEffect } from "react";
import { useStore } from "../Store/store";
import { socket } from "./socket";

export const useSocket = () => {
  const connected = useStore((state) => state.connected);
  const setConnected = useStore((state) => state.setConnected);
  const setLink = useStore((state) => state.setLink);
  const setPartnerConnected = useStore((state) => state.setPartnerConnected);
  const resetSocket = useStore((state) => state.resetSocket);

  const connect = () => {
    resetSocket();
    if (!socket.id) {
      socket.connect();
      setConnected(true);
    }
  };

  const newGame = (color) => {
    socket.emit("new game", color);
  };

  useEffect(() => {
    if (!connected) return;
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });
    socket.on("disconnect", () => {
      setConnected(false);
    });
    socket.on("game id", (gameId) => {
      setLink(`${window.location.origin}/${gameId}`);
    });
    socket.on("player connected", () => {
      setPartnerConnected(true);
    });

    return () => {
      socket.off("game id");
      socket.off("player connected");
    };
  }, [connected, setConnected, setLink, setPartnerConnected]);

  return [connect, newGame];
};
