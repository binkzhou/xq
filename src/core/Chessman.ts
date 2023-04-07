import { getTextHeight } from "./util";

interface ChessmanProps {
  x: number;
  y: number;
}

class Chessman {
  private x: number;
  private y: number;
  constructor() {
    this.x = 50;
    this.y = 50;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "60px serif";
    const text = "马";
    const width = ctx.measureText(text).width;
    let fontHeight = getTextHeight(text);
    console.log("fontHeight", fontHeight);
    ctx.fillText(text, this.x - width / 2, this.y + fontHeight);
  }
}

export { Chessman };
