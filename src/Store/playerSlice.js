export const playerSlice = (set, get) => ({
  myColor: null,
  currentPlayer: null,
  setCurrentPlayer: (player) => set(() => ({ currentPlayer: player })),
  initPlayer: ({ myColor, currentPlayer }) =>
    set(() => ({ myColor, currentPlayer })),
  togglePlayer: () => {
    const currentPlayer = get().currentPlayer;

    set(() => ({
      currentPlayer: currentPlayer === "white" ? "black" : "white",
    }));
  },
});
