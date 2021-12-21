import { Container } from "../TestBoardStyle";
import Piece from "./Piece/Piece";

export default function Pieces({ pieces, size }) {
  return (
    <Container>
      {pieces.map((piece) => (
        <Piece key={piece.id} piece={piece} size={size} />
      ))}
    </Container>
  );
}
