import { gameloop } from "./gameloop.js";
import { player } from "./player.js";

window.addEventListener("load", gameloop.start);

gameloop.init = () => {
  player.init();
};

gameloop.update = () => {
  player.update();
};

gameloop.render = () => {
  player.render();
};
