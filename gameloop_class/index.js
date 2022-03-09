import { gameloop } from "./gameloop.js";
import { player } from "./player.js";
import { enemies } from "./enemies.js";
import { keyPress } from "./keypress.js";

window.addEventListener("load", () => gameloop.start());

const canvasEl = document.createElement("canvas");
document.body.append(canvasEl);
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 300);

gameloop.render = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.render(ctx);
  enemies.forEach((e) => e.render(ctx));
};

gameloop.update = () => {
  player.update(keyPress, canvas);
};

gameloop.init = () => {
  player.init(canvas);
  // enemies[0].init(canvas);
};
