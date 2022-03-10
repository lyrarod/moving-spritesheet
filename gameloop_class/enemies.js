import Sprite from "./sprite.js";

class Enemies extends Sprite {
  constructor(x, y, size, color) {
    super(x, y, size, color);

    this.arrayOfEnemies = [];
  }

  addEnemies(enemie) {
    this.arrayOfEnemies.push(enemie);
  }
}

export const enemies = new Enemies();

const colors = ["crimson", "lightgreen", "#115", "goldenrod", "rebeccapurple"];
// const randomSize = 10 + Math.floor(Math.random() * 20);
Array(14)
  .fill()
  .map((_, i) =>
    enemies.addEnemies(
      new Enemies(
        40 + 30 * i, // x
        20, // y
        20, // size
        colors[Math.floor(Math.random() * colors.length)] // color
      )
    )
  );
// enemies.push(new Sprite(100, 100, 50, "cyan"));
