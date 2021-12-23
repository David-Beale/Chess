/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

const Game = this["js-chess-engine"].Game;

class ChessGame {
  constructor() {
    this.pieces = [];
    this.moves = {};
    this.aiLevel = 0;
    this.check = false;
    this.checkMate = false;
  }
  init() {
    this.game = new Game();
    this.pieces = [];
    this.updateBoard();
  }
  getPayload() {
    return {
      moves: this.moves,
      pieces: this.pieces,
      turn: this.turn,
      check: this.check,
      checkMate: this.checkMate,
    };
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
      if (!piece.location) return;
      if (tempPieces[piece.location] === piece.name) {
        delete tempPieces[piece.location];
        return;
      }
      missingPieces.push(piece);
    });
    missingPieces.forEach((piece) => {
      const newLocation = this.findPiece(tempPieces, piece.name);
      if (!newLocation) {
        piece.location = null;
        return;
      }
      piece.location = newLocation;
      delete tempPieces[piece.location];
    });
    this.checkForNewQueen(tempPieces, missingPieces);
  }
  checkForNewQueen(tempPieces, missingPieces) {
    const remainingPieces = Object.keys(tempPieces);
    if (remainingPieces.length) {
      const newQueen = missingPieces.find(
        (piece) => piece.name.toLowerCase() === "p"
      );
      newQueen.name = tempPieces[remainingPieces[0]];
      newQueen.location = remainingPieces[0];
    }
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
      };
      this.pieces.push(newPiece);
    }
  }

  move(from, to) {
    this.game.move(from, to);
    this.updateBoard(from, to);
  }
  aiMove() {
    console.log(this.aiLevel);
    const playedMove = this.game.aiMove(this.aiLevel);
    for (const from in playedMove) {
      const to = playedMove[from];
      this.updateBoard(from, to);
    }
  }
  updateAi(aiLevel) {
    this.aiLevel = aiLevel;
  }
}
