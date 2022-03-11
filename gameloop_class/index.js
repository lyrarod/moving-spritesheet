import { gameloop } from "./gameloop.js";
import { player } from "./player.js";
import Enemy, { enemy } from "./enemy.js";

addEventListener("load", () => gameloop.start());

gameloop.init = () => {
  player.init();
};

gameloop.update = () => {
  player.move();
};

gameloop.render = () => {
  player.render();
  enemy.arrayOfEnemies.map((e) => e.render());
};
