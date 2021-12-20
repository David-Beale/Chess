import { Game, move, status, moves, aiMove } from "js-chess-engine";

export default class Board {
  constructor() {
    this.matrix = null;
    this.lookup = {};
    this.init();
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
    const pieces = this.game.board.configuration.pieces;
    for (const location in pieces) {
      const piece = pieces[location];
      const isWhite = piece.charAt(0) === piece.charAt(0).toUpperCase();
      this.lookup[location].pieceColor = isWhite ? "white" : "black";
      this.lookup[location].piece = piece.toLowerCase();
    }
  }
}
