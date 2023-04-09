interface Shape {
  draw(ctx: CanvasRenderingContext2D): void;
}

const CHESS_TYPE = {
  JIANG: 1,
  SHI: 2,
  XIANG: 3,
  MA: 4,
  JU: 5,
  PAO: 6,
  ZU: 7
};

interface ChessmanType{
  type:"RED"|"BLACK"|"NONE", // 是红色棋子还是黑色棋子还是空白
  // x:number; // x轴坐标
  // y:number; // y轴坐标
  chess:number;
}


export { Shape,ChessmanType,CHESS_TYPE };
