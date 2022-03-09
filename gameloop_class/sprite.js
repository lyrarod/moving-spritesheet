export default class Sprite {
  constructor(x, y, size, color) {
    this.posX = x;
    this.posY = y;
    this.size = size;
    this.velocity = 2;
    this.color = color;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.size, this.size);
  }
}

// export const player = new Sprite(0, 0, 30, "steelblue");
