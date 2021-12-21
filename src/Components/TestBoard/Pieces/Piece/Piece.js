import { useEffect, useState } from "react";
import { PieceBackground, PieceContainer, Text } from "./PieceStyle";

const colToIndex = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
};
const rowToIndex = {
  8: 0,
  7: 1,
  6: 2,
  5: 3,
  4: 4,
  3: 5,
  2: 6,
  1: 7,
};
const convertLocationToPixels = (location, size) => {
  const colIndex = colToIndex[location[0]];
  const rowIndex = rowToIndex[location[1]];
  return [colIndex * size, rowIndex * size];
};
export default function Piece({ piece, size }) {
  const [translate, setTranslate] = useState([0, 0]);
  useEffect(() => {
    const [x, y] = convertLocationToPixels(piece.location, size);
    setTranslate([x, y]);
  }, [piece.location, size]);

  if (!piece.alive) return null;
  return (
    <PieceContainer size={size} translate={translate}>
      <PieceBackground size={size / 2} color={piece.color}>
        <Text color={piece.color}>{piece.name}</Text>
      </PieceBackground>
    </PieceContainer>
  );
}
