/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
importScripts("js-chess-engine.js");
// importScripts("test2.js");
importScripts("game.js");

const game = new ChessGame();

self.onmessage = (e) => {
  const { from, to, init, ai } = e.data;
  if (!init && !ai) {
    game.move(from, to);
  }
  if (ai) {
    game.aiMove();
  }
  const moves = game.getMoves();
  const pieces = game.getPieces();
  const [check, checkMate] = game.isChecked();
  self.postMessage({ moves, pieces, check, checkMate });
};
