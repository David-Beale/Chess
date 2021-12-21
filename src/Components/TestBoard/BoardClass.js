import { Game, move, status, moves, aiMove } from "js-chess-engine";

export default class Board {
  constructor(myColor) {
    this.matrix = null;
    this.lookup = {};
    this.pieces = [];
    this.init(myColor);
  }
  init() {
    this.matrix = [];
    for (let r = 8; r > 0; r--) {
      const newRow = [];
      for (let c = 65; c < 73; c++) {
        const col = String.fromCharCode(c);
        const location = `${col}${r}`;
        const cell = {
          moves: null,
          location,
        };
        newRow.push(cell);
        this.lookup[location] = cell;
      }
      this.matrix.push(newRow);
    }
    this.game = new Game();
    this.updateBoard();
  }
  getBoardPositions() {
    return [...this.matrix];
  }
  getPieces() {
    return [...this.pieces];
  }
  updateBoard() {
    const { pieces, moves, check, checkMate } = this.game.exportJson();
    this.check = check;
    this.checkMate = checkMate;
    this.matrix.forEach((row) => {
      row.forEach((cell) => {
        cell.moves = moves[cell.location] ? moves[cell.location] : null;
      });
    });

    this.updatePieces(pieces);
  }
  findPiece(piecesObject, name) {
    const array = Object.keys(piecesObject);
    for (let i = 0; i < array.length; i++) {
      const location = array[i];
      if (piecesObject[location] === name) return location;
    }
  }
  updatePieces(pieces) {
    if (!this.pieces.length) return this.initPieces(pieces);
    const tempPieces = { ...pieces };
    const missingPieces = [];
    this.pieces.forEach((piece) => {
      if (tempPieces[piece.location] === piece.name) {
        delete tempPieces[piece.location];
        return;
      }
      missingPieces.push(piece);
    });
    missingPieces.forEach((piece) => {
      const newLocation = this.findPiece(tempPieces, piece.name);
      if (!newLocation) {
        piece.alive = false;
        return;
      }
      piece.location = newLocation;
      delete tempPieces[piece.location];
    });
  }
  initPieces(pieces) {
    let id = 0;

    const piecesArray = Object.keys(pieces);
    for (let i = 0; i < piecesArray.length; i++) {
      const location = piecesArray[i];
      const newPiece = {
        id: id++,
        location,
        name: pieces[location],
        color:
          pieces[location].charAt(0) ===
          pieces[location].charAt(0).toUpperCase()
            ? "white"
            : "black",
        alive: true,
      };
      this.pieces.push(newPiece);
    }
  }
  isChecked() {
    return [this.check, this.checkMate];
  }
  move(from, to) {
    this.game.move(from, to);
    this.updateBoard(from, to);
  }
  aiMove() {
    const playedMove = this.game.aiMove();
    for (const from in playedMove) {
      const to = playedMove[from];
      this.updateBoard(from, to);
    }
  }
}
