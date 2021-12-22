const canTake = (availableMoves, target) => {
  return availableMoves && availableMoves.includes(target);
};
const alreadySelected = (location, current) => {
  return location === current;
};

export const clickSlice = (set, get) => ({
  currentSelected: null,
  target: null,
  moves: [],
  resetClicks: () =>
    set(() => ({ moves: [], currentSelected: null, target: null })),
  setCurrent: (location) => {
    const current = get().currentSelected;
    if (alreadySelected(location, current)) {
      set(() => ({ currentSelected: null, moves: [] }));
      return;
    }
    const allMoves = get().allMoves;
    if (canTake(allMoves[current], location)) {
      set(() => ({ target: location }));
      return;
    }
    const availableMoves = allMoves[location];
    if (!availableMoves) return;
    set(() => ({ currentSelected: location, moves: availableMoves }));
  },
  setTarget: (target) => set(() => ({ target })),
});
