import { gameloop } from "./gameloop.js";
import { player } from "./player.js";
import { enemy } from "./enemy.js";

window.addEventListener("load", () => gameloop.start());

gameloop.init = () => {
  player.arrayOfPlayers[player.arrayOfPlayers.length - 1].init();
};

gameloop.update = () => {
  player.arrayOfPlayers.map((p) => p.move());
};

gameloop.render = () => {
  player.arrayOfPlayers.map((p) => p.render());
  enemy.arrayOfEnemies.map((e) => e.render());
};
