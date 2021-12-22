/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const Game = this["js-chess-engine"].Game;

class ChessGame {
  constructor() {
    this.pieces = [];
    this.moves = {};
    this.init();
    this.aiLevel = 3;
    this.check = false;
    this.checkMate = false;
  }
  init() {
    this.game = new Game();
    this.updateBoard();
  }
  getMoves() {
    return this.moves;
  }
  getPieces() {
    return this.pieces;
  }
  getTurn() {
    return this.turn;
  }
  updateBoard() {
    const { pieces, moves, check, checkMate, turn } = this.game.exportJson();
    this.check = check;
    this.checkMate = checkMate;
    this.turn = turn;
    this.moves = moves;
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
      if (!piece.alive) return;
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
    const playedMove = this.game.aiMove(this.aiLevel);
    for (const from in playedMove) {
      const to = playedMove[from];
      this.updateBoard(from, to);
    }
  }
}
