import { useSize } from "../../hooks/useSize";
import { Row } from "./Row/Row";
import { BoardContainer } from "./TestBoardStyle";
import useBoard from "./useBoard";

export default function TestBoard() {
  const boardPositions = useBoard();
  const size = useSize();
  if (!boardPositions) return null;
  return (
    <BoardContainer size={size}>
      {boardPositions.map((row, index) => (
        <Row key={index} row={row} size={size} />
      ))}
    </BoardContainer>
  );
}
