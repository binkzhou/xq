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
    ctx.beginPath(); 
    ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    ctx.fillStyle="white"
    ctx.fill();
    ctx.stroke();
    ctx.font = "20px serif";
    ctx.fillStyle="black"
    const text = "車"; //兵 炮 車 馬 相 仕 帥   
    // 黑方 卒 炮 車 馬 象 士 将
    const width = ctx.measureText(text).width;
    let fontHeight = getTextHeight(text);
    console.log("fontHeight", fontHeight);
    ctx.fillText(text, this.x - width / 2, this.y + 8);
  }
}

export { Chessman };
