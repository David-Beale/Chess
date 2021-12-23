/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
importScripts("js-chess-engine.js");
importScripts("game.js");

const game = new ChessGame();

self.onmessage = (e) => {
  const { type } = e.data;
  switch (type) {
    case "init":
      game.init();
      self.postMessage(game.getPayload());
      break;
    case "move":
      const { from, to } = e.data;
      game.move(from, to);
      self.postMessage(game.getPayload());
      break;
    case "aiMove":
      game.aiMove();
      self.postMessage(game.getPayload());
      break;
    default:
      break;
  }
};
