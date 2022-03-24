import { gameloop } from "./gameloop.js";
import { player } from "./player.js";

window.addEventListener("load", gameloop.start);

gameloop.init = () => {
  // player.arrayOfPlayers?.map((p) => p.initPosition());
  player.arrayOfPlayers[player.arrayOfPlayers.length - 1]?.initPosition();
};

gameloop.update = () => {
  // player.update();
  player.arrayOfPlayers?.map((p) => p.update());
};

gameloop.render = () => {
  player.arrayOfPlayers?.map((p) => p.render());
};
