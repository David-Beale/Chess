export const piecesSlice = (set) => ({
  pieces: [],
  setPieces: (pieces) => set(() => ({ pieces })),
  allMoves: {},
  setAllMoves: (allMoves) => set(() => ({ allMoves })),
});
