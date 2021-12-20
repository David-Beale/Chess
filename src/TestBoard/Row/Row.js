import { useSize } from "../../hooks/useSize";
import Cell from "./Cell/Cell";
import { RowContainer } from "./RowStyle";

export function Row({ row }) {
  const size = useSize();
  return (
    <RowContainer size={size}>
      {row.map((cell) => (
        <Cell cell={cell} size={size / 8} />
      ))}
    </RowContainer>
  );
}
