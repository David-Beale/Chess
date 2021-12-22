export const clickSlice = (set, get) => ({
  currentSelected: null,
  selectedLocation: null,
  from: null,
  to: null,
  moves: [],
  setFrom: (location) => set(() => ({ selectedLocation: location })),
  setLocation: (location, moves) => {
    const from = get().from;
    if (!from) {
      const lookup = {};
      moves.forEach((move) => (lookup[move] = true));
      set(() => ({ from: location, moves: lookup }));
    } else if (location === from) {
      set(() => ({ from: null, moves: {} }));
    } else {
      set(() => ({ to: location }));
    }
  },
  resetClicks: () => set(() => ({ moves: [] })),
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
});
