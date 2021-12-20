import CurrentPlayer from "./CurrentPlayer/CurrentPlayer";
import { Row } from "./Row/Row";
import { BoardContainer } from "./TestBoardStyle";
import useBoard from "./useBoard";

export default function TestBoard() {
  const boardPositions = useBoard();
  if (!boardPositions) return null;
  return (
    <BoardContainer>
      <CurrentPlayer />
      {boardPositions.map((row, index) => (
        <Row key={index} row={row} />
      ))}
    </BoardContainer>
  );
}
