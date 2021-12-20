export const gameSlice = (set, get) => ({
  check: false,
  checkMate: false,
  setCheck: (check) => set(() => ({ check })),
  setCheckMate: (checkMate) => set(() => ({ checkMate })),
});
