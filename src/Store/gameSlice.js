export const gameSlice = (set) => ({
  check: false,
  checkMate: false,
  newGame: false,
  aiLevel: 0,
  setCheck: (check) => set(() => ({ check })),
  setCheckMate: (checkMate) => set(() => ({ checkMate })),
  startNewGame: () => set(() => ({ newGame: [] })),
  setAiLevel: (aiLevel) => set(() => ({ aiLevel })),
});
