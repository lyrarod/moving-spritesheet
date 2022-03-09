import Sprite from "./sprite.js";

class Enemies extends Sprite {
  constructor(x, y, size, color) {
    super(x, y, size, color);
  }
}

const enemies = [];
const colors = ["red", "green", "blue", "orange", "rebeccapurple"];
// const randomSize = 10 + Math.floor(Math.random() * 20);
Array(14)
  .fill()
  .forEach((_, i) =>
    enemies.push(
      new Enemies(
        40 + 30 * i, // x
        10, // y
        20, // size
        colors[Math.floor(Math.random() * colors.length)] // color
      )
    )
  );
// enemies.push(new Sprite(100, 100, 50, "cyan"));

export { enemies };
