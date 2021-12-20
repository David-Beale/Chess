import { StyledCell } from "./CellStyle";

export default function Cell({ cell, size }) {
  return (
    <StyledCell size={size} color={cell.boardColor}>
      {cell.piece}
    </StyledCell>
  );
}
