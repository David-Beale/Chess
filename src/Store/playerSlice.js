export const playerSlice = (set) => ({
  myColor: null,
  currentPlayer: null,
  setCurrentPlayer: (player) => set(() => ({ currentPlayer: player })),
  initPlayer: (myColor) => set(() => ({ myColor })),
});
