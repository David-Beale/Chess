export const playerSlice = (set) => ({
  myColor: "white",
  currentPlayer: null,
  setCurrentPlayer: (player) => set(() => ({ currentPlayer: player })),
  setPlayerColor: (myColor) => set(() => ({ myColor })),
});
