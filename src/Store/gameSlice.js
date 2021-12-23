export const gameSlice = (set) => ({
  check: false,
  checkMate: false,
  newGame: false,
  setCheck: (check) => set(() => ({ check })),
  setCheckMate: (checkMate) => set(() => ({ checkMate })),
  startNewGame: () => set(() => ({ newGame: [] })),
});
