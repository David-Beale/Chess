export const clickSlice = (set, get) => ({
  currentSelected: null,
  target: null,
  moves: [],
  resetClicks: () =>
    set(() => ({ moves: [], currentSelected: null, target: null })),
  setCurrent: (location) => {
    const current = get().currentSelected;
    if (location === current) {
      set(() => ({ currentSelected: null, moves: [] }));
    } else {
      const moves = get().allMoves[location];
      if (!moves) return;
      set(() => ({ currentSelected: location, moves }));
    }
  },
  setTarget: (target) => set(() => ({ target })),
});
