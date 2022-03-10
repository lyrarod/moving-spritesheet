import { gameloop } from "./gameloop.js";
import { player } from "./player.js";
import Enemy, { enemy } from "./enemy.js";

addEventListener("load", () => gameloop.start());

gameloop.init = () => {
  player.init(gameloop.canvas);
};

gameloop.update = () => {
  player.move(gameloop.canvas);
};

gameloop.render = () => {
  gameloop.clearCanvas();
  player.render(gameloop.ctx);
  enemy.add(new Enemy(240, 140, 20, "crimson"));
  enemy.arrayOfEnemies.map((e) => e.render(gameloop.ctx));
};
