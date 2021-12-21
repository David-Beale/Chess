import create from "zustand";
import { playerSlice } from "./playerSlice";
import { clickSlice } from "./clickSlice";
import { gameSlice } from "./gameSlice";
import { piecesSlice } from "./piecesSlice";

export const useStore = create((set, get) => ({
  ...playerSlice(set, get),
  ...clickSlice(set, get),
  ...gameSlice(set, get),
  ...piecesSlice(set, get),
}));
