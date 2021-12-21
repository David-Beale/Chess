import { Row } from "./Row/Row";
import { Container } from "../TestBoardStyle";

export default function BoardUI({ boardPositions }) {
  return (
    <Container>
      {boardPositions.map((row, index) => (
        <Row key={index} row={row} />
      ))}
    </Container>
  );
}
