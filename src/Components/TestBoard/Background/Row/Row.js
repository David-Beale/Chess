import Cell from "./Cell/Cell";
import { RowContainer } from "./RowStyle";

export function Row({ row }) {
  return (
    <RowContainer>
      {row.map((color, index) => (
        <Cell key={index} color={color} />
      ))}
    </RowContainer>
  );
}
