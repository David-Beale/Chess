import Cell from "./Cell/Cell";
import { RowContainer } from "./RowStyle";

export function Row({ row }) {
  return (
    <RowContainer>
      {row.map((cell, index) => (
        <Cell key={index} cell={cell} />
      ))}
    </RowContainer>
  );
}
