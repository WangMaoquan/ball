import * as PIXI from 'pixi.js';
const game = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x061639
});

document.body.appendChild(game.view)

export function getCanvasContainer() {
  return game.stage;
}

export function getGame() {
  return game;
}