import { useStore } from "../../../../Store/store";
import Move from "./Move/Move";

export default function Moves() {
  const moves = useStore((state) => state.moves);
  return moves.map((move) => <Move key={move} location={move} />);
}
