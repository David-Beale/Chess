export const gameSlice = (set) => ({
  check: false,
  checkMate: false,
  newGame: ["white"],
  aiLevel: 0,
  mode: "ai",
  opponentDisconnected: [false],
  setCheck: (check) => set(() => ({ check })),
  setCheckMate: (checkMate) => set(() => ({ checkMate })),
  startNewGame: (color) => set(() => ({ newGame: [color] })),
  setAiLevel: (aiLevel) => set(() => ({ aiLevel })),
  setMode: (mode) => set(() => ({ mode })),
  setOpponentDisconnect: () => set(() => ({ opponentDisconnected: [true] })),
});
