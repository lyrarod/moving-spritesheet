import Sprite from "./sprite.js";

export default class Enemy extends Sprite {
  constructor(x, y, size, color) {
    super(x, y, size, color);

    this.arrayOfEnemies = [];
  }

  add = (enemy) => this.arrayOfEnemies.push(enemy);
}

export const enemy = new Enemy();

const numberOfEnemies = 10;
const colors = ["red", "green", "blue", "orange", "purple"];

Array(numberOfEnemies)
  .fill()
  .map((_, i) =>
    enemy.add(
      new Enemy(
        30 + 46 * i, // x
        20, // y
        20, // size
        colors[Math.floor(Math.random() * colors.length)] // color
      )
    )
  );
