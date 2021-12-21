import { useSize } from "../../hooks/useSize";
import Background from "./Background/Background";
import { BoardContainer } from "./TestBoardStyle";
import useBoard from "./useBoard";
import BoardUI from "./BoardUI/BoardUI";
import Pieces from "./Pieces/Pieces";

export default function TestBoard() {
  const [boardPositions, pieces] = useBoard();
  const size = useSize();
  if (!boardPositions || !pieces) return null;
  return (
    <BoardContainer size={size}>
      <Background />
      <Pieces pieces={pieces} size={size / 8} />
      <BoardUI boardPositions={boardPositions} />
    </BoardContainer>
  );
}
