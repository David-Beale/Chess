import { useStore } from "../../../../Store/store";
import Piece from "./Piece/Piece";

export default function Pieces({ chessSet }) {
  const pieces = useStore((state) => state.pieces);
  if (!pieces) return null;
  return pieces.map((piece) => (
    <Piece
      key={piece.id}
      object={chessSet[piece.name]}
      location={piece.location}
    />
  ));
}
