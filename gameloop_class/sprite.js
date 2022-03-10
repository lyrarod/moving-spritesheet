export default class Sprite {
  constructor(x, y, size, color) {
    this.posX = x;
    this.posY = y;
    this.size = size;
    this.color = color;
  }

  render = (ctx) => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.size, this.size);
  };
}
