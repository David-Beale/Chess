import { useMemo } from "react";
import { Container } from "../TestBoardStyle";
import { Row } from "./Row/Row";

export default function Background() {
  const boardPositions = useMemo(() => {
    const matrix = [];
    let color = 1;
    for (let r = 8; r > 0; r--) {
      const newRow = [];
      for (let c = 0; c < 8; c++) {
        newRow.push(color ? "lightgrey" : "darkgrey");
        color = color ? 0 : 1;
      }
      color = color ? 0 : 1;
      matrix.push(newRow);
    }
    return matrix;
  }, []);

  return (
    <Container>
      {boardPositions.map((row, index) => (
        <Row key={index} row={row} />
      ))}
    </Container>
  );
}
