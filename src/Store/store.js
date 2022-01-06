import create from "zustand";
import { cameraSlice } from "./cameraSlice";
import { clickSlice } from "./clickSlice";
import { gameSlice } from "./gameSlice";
import { piecesSlice } from "./piecesSlice";
import { playerSlice } from "./playerSlice";
import { socketSlice } from "./socketSlice";

export const useStore = create((set, get) => ({
  ...cameraSlice(set, get),
  ...clickSlice(set, get),
  ...gameSlice(set, get),
  ...piecesSlice(set, get),
  ...playerSlice(set, get),
  ...socketSlice(set, get),
}));
