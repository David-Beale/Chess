import create from "zustand";
import { playerSlice } from "./playerSlice";
import { clickSlice } from "./clickSlice";

export const useStore = create((set, get) => ({
  ...playerSlice(set, get),
  ...clickSlice(set, get),
}));
