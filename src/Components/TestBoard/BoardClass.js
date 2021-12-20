import { Game, move, status, moves, aiMove } from "js-chess-engine";
import { useStore } from "../../Store/store";

export default class Board {
  constructor(myColor) {
    this.matrix = null;
    this.lookup = {};
    this.init(myColor);
  }
  init() {
    this.matrix = [];
    let color = 1;
    for (let r = 8; r > 0; r--) {
      const newRow = [];
      for (let c = 65; c < 73; c++) {
        const col = String.fromCharCode(c);
        const location = `${col}${r}`;
        const cell = {
          piece: null,
          pieceColor: null,
          moves: null,
          boardColor: color ? "white" : "black",
          location,
        };
        newRow.push(cell);
        this.lookup[location] = cell;
        color = color ? 0 : 1;
      }
      color = color ? 0 : 1;
      this.matrix.push(newRow);
    }
    this.game = new Game();
    this.updatePieces();
  }
  getBoardPositions() {
    return [...this.matrix];
  }

  updatePieces() {
    const pieces = this.game.board.configuration.pieces;
    const moves = this.game.moves();

    this.matrix.forEach((row) => {
      row.forEach((cell) => {
        cell.piece = pieces[cell.location] ? pieces[cell.location] : null;
        if (cell.piece) {
          cell.pieceColor =
            cell.piece.charAt(0) === cell.piece.charAt(0).toUpperCase()
              ? "white"
              : "black";
        } else {
          cell.pieceColor = null;
        }
        cell.piece = pieces[cell.location] ? pieces[cell.location] : null;
        cell.moves = moves[cell.location] ? moves[cell.location] : null;
      });
    });
  }
  move(from, to) {
    this.game.move(from, to);
    this.updatePieces(from, to);
  }
  aiMove() {
    const playedMove = this.game.aiMove();
    for (const from in playedMove) {
      const to = playedMove[from];
      this.updatePieces(from, to);
    }
  }
}
