import { useStore } from "../../../../../Store/store";
import { StyledCell } from "./CellStyle";

const getSelectable = (currentPlayer, myColor, cell, from, moves) => {
  // if (currentPlayer !== myColor) return false;
  if (!from) return !!cell.moves;
  return moves[cell.location];
};
export default function Cell({ cell }) {
  const currentPlayer = useStore((state) => state.currentPlayer);
  const myColor = useStore((state) => state.myColor);
  const from = useStore((state) => state.from);
  const setLocation = useStore((state) => state.setLocation);
  const moves = useStore((state) => state.moves);
  const selectable = getSelectable(currentPlayer, myColor, cell, from, moves);
  const selected = from === cell.location;
  const destination = moves[cell.location];
  const onClick = () => {
    if (!selectable && !selected && !destination) return;
    setLocation(cell.location, cell.moves);
  };

  return (
    <StyledCell
      onClick={onClick}
      selected={selected}
      destination={destination}
      hover={selectable}
    />
  );
}
