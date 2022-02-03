import { io } from "socket.io-client";

export const socket = io("https://chess-server-1.herokuapp.com/", {
  autoConnect: false,
});
