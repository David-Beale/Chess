import { useStore } from "../../../../Store/store";
import { PieceBackground, StyledCell, Text } from "./CellStyle";

const getSelectable = (currentPlayer, myColor, cell, from, moves) => {
  if (currentPlayer !== myColor) return false;
  if (!from) return !!cell.moves;
  return moves[cell.location];
};
export default function Cell({ cell, size }) {
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
      size={size}
      color={cell.boardColor}
      selected={selected}
      destination={destination}
      hover={selectable}
    >
      <Text pieceColor={cell.pieceColor}>{cell.piece}</Text>
      {cell.piece !== null && (
        <PieceBackground size={size / 2} color={cell.pieceColor} />
      )}
    </StyledCell>
  );
}
