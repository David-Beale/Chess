import { useMemo } from "react";
import Board from "./BoardClass";
import { Row } from "./Row/Row";
import { BoardContainer } from "./TestBoardStyle";

export default function TestBoard() {
  const board = useMemo(() => {
    return new Board();
  }, []);
  return (
    <BoardContainer>
      {board.matrix.map((row) => (
        <Row row={row} />
      ))}
    </BoardContainer>
  );
}
