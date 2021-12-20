import Cell from "./Cell/Cell";
import { RowContainer } from "./RowStyle";

export function Row({ row, size }) {
  return (
    <RowContainer size={size}>
      {row.map((cell, index) => (
        <Cell key={index} cell={cell} size={size / 8} />
      ))}
    </RowContainer>
  );
}
