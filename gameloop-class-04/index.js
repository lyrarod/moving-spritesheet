import { gameloop } from "./gameloop.js";
import { bird } from "./bird.js";

window.addEventListener("load", () => gameloop.start());

gameloop.init = () => bird.init();

gameloop.update = () => bird.move();

gameloop.render = () => bird.render();
