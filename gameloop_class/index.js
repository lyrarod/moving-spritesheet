import { gameloop } from "./gameloop.js";
import { player } from "./player.js";
import { enemies } from "./enemies.js";
import { keyPress } from "./keypress.js";

window.addEventListener("load", () => gameloop.start());

gameloop.render = () => {
  gameloop.ctx.clearRect(0, 0, gameloop.CANVAS_WIDTH, gameloop.CANVAS_HEIGHT);
  player.render(gameloop.ctx);
  enemies.forEach((e) => e.render(gameloop.ctx));
};

gameloop.update = () => {
  player.update(keyPress, gameloop.canvas);
};

gameloop.init = () => {
  player.init(gameloop.canvas);
  // enemies[0].init(canvas);
};
