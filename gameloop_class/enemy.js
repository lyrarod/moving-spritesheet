import Sprite from "./sprite.js";

export default class Enemy extends Sprite {
  constructor(options) {
    super(options);

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
      new Enemy({
        x: 10 + 50 * i,
        y: 10,
        width: 20,
        height: 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    )
  );

enemy.add(
  new Enemy({
    x: 200,
    y: 200,
    width: 40,
    height: 20,
    color: "crimson",
  })
);
