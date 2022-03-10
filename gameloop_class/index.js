import { gameloop } from "./gameloop.js";
import { player } from "./player.js";
import { enemies } from "./enemies.js";

window.addEventListener("load", () => gameloop.start());

gameloop.render = () => {
  gameloop.clearCanvas();
  player.render(gameloop.ctx);
  enemies.arrayOfEnemies.map((e) => e.render(gameloop.ctx));
};

gameloop.update = () => {
  player.move(gameloop.canvas);
};

gameloop.init = () => {
  player.init(gameloop.canvas);
};
