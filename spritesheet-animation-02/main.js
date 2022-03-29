import { gameloop } from "./gameloop.js";
import { juggernault } from "./sprite.js";

window.addEventListener("load", gameloop.start());

gameloop.update = () => {
  juggernault.update();
};

gameloop.render = () => {
  juggernault.render();
};
