import { Shape } from "./types";

class Stage {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  public add(shape: Shape) {
    shape.draw(this.ctx);
  }
}

export { Stage };
