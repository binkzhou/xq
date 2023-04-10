import { CHESS_TYPE, ChessmanType, Shape } from "./types";



class Stage {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private list: ChessmanType[][] = [];
  private move: {
    startRow: number;
    startColum: number;
    endRow: number;
    endColumn: number;
    status: "star" | "end"
  }
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.drawBoard(this.ctx);
    const chessBoard: ChessmanType[][] = [];
    for (let i = 0; i < 10; i++) {
      chessBoard[i] = [];
      for (let j = 0; j < 9; j++) {
        chessBoard[i][j] = { type: "NONE", chess: 0 };
      }
    }

    chessBoard[0][0] = { type: 'BLACK', chess: CHESS_TYPE.JU };
    chessBoard[0][1] = { type: 'BLACK', chess: CHESS_TYPE.MA };
    chessBoard[0][2] = { type: 'BLACK', chess: CHESS_TYPE.XIANG };
    chessBoard[0][3] = { type: 'BLACK', chess: CHESS_TYPE.SHI };
    chessBoard[0][4] = { type: 'BLACK', chess: CHESS_TYPE.JIANG };
    chessBoard[0][5] = { type: 'BLACK', chess: CHESS_TYPE.SHI };
    chessBoard[0][6] = { type: 'BLACK', chess: CHESS_TYPE.XIANG };
    chessBoard[0][7] = { type: 'BLACK', chess: CHESS_TYPE.MA };
    chessBoard[0][8] = { type: 'BLACK', chess: CHESS_TYPE.JU };

    chessBoard[2][1] = { type: 'BLACK', chess: CHESS_TYPE.PAO };
    chessBoard[2][7] = { type: 'BLACK', chess: CHESS_TYPE.PAO };


    chessBoard[3][0] = { type: 'BLACK', chess: CHESS_TYPE.ZU };
    chessBoard[3][2] = { type: 'BLACK', chess: CHESS_TYPE.ZU };
    chessBoard[3][4] = { type: 'BLACK', chess: CHESS_TYPE.ZU };
    chessBoard[3][6] = { type: 'BLACK', chess: CHESS_TYPE.ZU };
    chessBoard[3][8] = { type: 'BLACK', chess: CHESS_TYPE.ZU };



    chessBoard[9][0] = { type: 'RED', chess: CHESS_TYPE.JU };
    chessBoard[9][1] = { type: 'RED', chess: CHESS_TYPE.MA };
    chessBoard[9][2] = { type: 'RED', chess: CHESS_TYPE.XIANG };
    chessBoard[9][3] = { type: 'RED', chess: CHESS_TYPE.SHI };
    chessBoard[9][4] = { type: 'RED', chess: CHESS_TYPE.JIANG };
    chessBoard[9][5] = { type: 'RED', chess: CHESS_TYPE.SHI };
    chessBoard[9][6] = { type: 'RED', chess: CHESS_TYPE.XIANG };
    chessBoard[9][7] = { type: 'RED', chess: CHESS_TYPE.MA };
    chessBoard[9][8] = { type: 'RED', chess: CHESS_TYPE.JU };

    chessBoard[7][1] = { type: 'RED', chess: CHESS_TYPE.PAO };
    chessBoard[7][7] = { type: 'RED', chess: CHESS_TYPE.PAO };


    chessBoard[6][0] = { type: 'RED', chess: CHESS_TYPE.ZU };
    chessBoard[6][2] = { type: 'RED', chess: CHESS_TYPE.ZU };
    chessBoard[6][4] = { type: 'RED', chess: CHESS_TYPE.ZU };
    chessBoard[6][6] = { type: 'RED', chess: CHESS_TYPE.ZU };
    chessBoard[6][8] = { type: 'RED', chess: CHESS_TYPE.ZU };


    this.list = chessBoard;
    this.drawChessman();
    this.move = { startRow: -1, startColum: -1, endRow: -1, endColumn: -1, status: "star" }
    this.canvas.addEventListener("click", e => {
      const { x, y } = e;
      const row = Math.ceil((y - 100 + 25) / 50);
      const colum = Math.ceil((x - 100 + 25) / 50);
      console.log("row", row);
      console.log("colum", colum);

      if (!(row >= 0 && colum >= 0 && row <= 9 && colum <= 8)) {
        return;
      }
      const item = this.list[row][colum];

      if (this.move.status && this.move.status === 'end') {

        const endChessman = this.list[row][colum];

        // 不能吃自己的棋子
        if (endChessman.type === this.list[this.move.startRow][this.move.startColum].type) {
          return;
        }

        // console.log("@",this.list);
        this.move.status = "star";
        const chess = this.list[this.move.startRow][this.move.startColum].chess;

        switch (chess) {
          case CHESS_TYPE.JU:
            // 车的走法
            if (row !== this.move.startRow && colum !== this.move.startColum) {
              return;
            }

            if (row === this.move.startRow) {
              const min = Math.min(this.move.startColum, colum);
              const max = Math.max(this.move.startColum, colum);
              console.log("min", min);
              console.log("max", max);

              for (let i = min + 1; i < max; i++) {
                if (this.list[row][i].type !== 'NONE') {
                  return;
                }
              }
            }

            if (colum === this.move.startColum) {
              const min = Math.min(this.move.startRow, row);
              const max = Math.max(this.move.startRow, row);
              console.log("min", min);
              for (let i = min + 1; i < max; i++) {
                if (this.list[i][colum].type !== 'NONE') {
                  return;
                }
              }
            }

            this.list[row][colum] = this.list[this.move.startRow][this.move.startColum];
            this.list[this.move.startRow][this.move.startColum] = { type: "NONE", chess: -1 };
            break;

          case CHESS_TYPE.PAO:

            // 只能横着或竖着走
            if (row !== this.move.startRow && colum !== this.move.startColum) {
              return;
            }

            if (row === this.move.startRow) {
              // 自己
              const sleft = this.list[this.move.startRow][this.move.startColum].type;
              // 敌方
              const enemy = this.list[row][colum];
              const color = sleft === 'BLACK' ? "RED" : "BLACK"

              const min = Math.min(this.move.startColum, colum);
              const max = Math.max(this.move.startColum, colum);

              // 如果终点是敌方棋子
              if (enemy.type === color) {
                let interval = 0;
                for (let i = min + 1; i < max; i++) {
                  if (this.list[row][i].type !== 'NONE') {
                    interval +=1;
                  }
                }

                if(interval!==1){
                  return;
                }

              } else {
                // 如果是空白区域
                for (let i = min + 1; i < max; i++) {
                  if (this.list[row][i].type !== 'NONE') {
                    return;
                  }
                }
              }


            }

            if (colum === this.move.startColum) {
              // 自己
              const sleft = this.list[this.move.startRow][this.move.startColum].type;
              // 敌方
              const enemy = this.list[row][colum];
              const color = sleft === 'BLACK' ? "RED" : "BLACK"

              const min = Math.min(this.move.startRow, row);
              const max = Math.max(this.move.startRow, row);

              // 如果终点是敌方棋子
              if (enemy.type === color) {
                let interval = 0;
                for (let i = min + 1; i < max; i++) {
                  if (this.list[i][colum].type !== 'NONE') {
                    interval +=1;
                  }
                }

                if(interval!==1){
                  return;
                }

              } else {
                // 如果是空白区域
                for (let i = min + 1; i < max; i++) {
                  if (this.list[i][colum].type !== 'NONE') {
                    return;
                  }
                }
              }
            }
            this.list[row][colum] = this.list[this.move.startRow][this.move.startColum];
            this.list[this.move.startRow][this.move.startColum] = { type: "NONE", chess: -1 };
            break;
          case CHESS_TYPE.MA:
            // 馬跳日
            const {startRow,startColum} = this.move;
            const condition1 = row===startRow-2&&colum===startColum+1;
            const condition2 = row===startRow-1&&colum===startColum+2;
            const condition3 = row===startRow+1&&colum===startColum+2;
            const condition4 = row===startRow+2&&colum===startColum+1;
            const condition5 = row===startRow+2&&colum===startColum-1;
            const condition6 = row===startRow+1&&colum===startColum-2;
            const condition7 = row===startRow-1&&colum===startColum-2;
            const condition8 = row===startRow-2&&colum===startColum-1;
            if(!(condition1||condition2||condition3||condition4||condition5||condition6||condition7||condition8)){
              return;
            }

            // 撇脚
            if((condition1||condition8)&&this.list[startRow-1][startColum].type!=='NONE'){
              return;

            }

            if((condition2||condition3)&&this.list[startRow][startColum+1].type!=='NONE'){
              return;

            }

            if((condition4||condition5)&&this.list[startRow+1][startColum].type!=='NONE'){
              return;

            }


            if((condition6||condition7)&&this.list[startRow][startColum-1].type!=='NONE'){
              return;

            }


            this.list[row][colum] = this.list[this.move.startRow][this.move.startColum];
            this.list[this.move.startRow][this.move.startColum] = { type: "NONE", chess: -1 };
            break;
            case CHESS_TYPE.SHI:
              //实现士
              const type = this.list[this.move.startRow][this.move.startColum].type;
              if(type==='BLACK'){
                if(!((row===0&&colum===3)||(row===0&&colum===5)||(row===1&&colum===4)||(row===2&&colum===3)||(row===2&&colum===5))){
                  return;
                }
              }

              if(type==='RED'){
                if(!((row===7&&colum===3)||(row===7&&colum===5)||(row===8&&colum===4)||(row===9&&colum===3)||(row===9&&colum===5))){
                  return;
                }
              }

              if(![1,-1].includes(this.move.startRow-row)){
                return;
              }

              this.list[row][colum] = this.list[this.move.startRow][this.move.startColum];
              this.list[this.move.startRow][this.move.startColum] = { type: "NONE", chess: -1 };
              break;
          }

      } else {
        if (item.type !== 'NONE') {
          this.move.startRow = row;
          this.move.startColum = colum;
          this.move.status = "end";
        }
      }

      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.drawBoard(this.ctx)
      this.drawChessman();

      // console.log(this.list);


    })
  }

  // 绘制棋盘
  drawBoard(ctx: CanvasRenderingContext2D) {

    const x = 50;
    const y = 10;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, x);
    this.ctx.strokeStyle = "black"
    this.ctx.lineWidth = 1;
    ctx.lineTo(400 + x, 0 + x);
    ctx.moveTo(0 + x, 0 + x);
    ctx.lineTo(0 + x, 450 + x);
    ctx.moveTo(400 + x, 0 + x);
    ctx.lineTo(400 + x, 450 + x);


    // 绘制上面横条

    for (let i = 1; i < 5; i++) {
      ctx.moveTo(0 + x, i * 50 + x);
      ctx.lineTo(400 + x, i * 50 + x);
    }

    // 绘制上面竖条

    for (let i = 1; i < 8; i++) {
      ctx.moveTo(50 * i + x, 0 + x);
      ctx.lineTo(50 * i + x, 200 + x);
    }


    // 绘制下面横条

    for (let i = 1; i < 6; i++) {
      ctx.moveTo(0 + x, 200 + i * 50 + x);
      ctx.lineTo(400 + x, 200 + i * 50 + x);
    }


    // 绘制下面竖条

    for (let i = 1; i < 8; i++) {
      ctx.moveTo(50 * i + x, 250 + x);
      ctx.lineTo(50 * i + x, 450 + x);
    }
    this.ctx.fillStyle = "black"
    ctx.font = "40px serif";
    ctx.fillText("楚河", x + 65, x + 240);
    ctx.fillText("汉界", x + 265, x + 240);

    // 绘制上面九宫
    ctx.moveTo(150 + x, 0 + x);
    ctx.lineTo(250 + x, 100 + x);
    ctx.moveTo(250 + x, 0 + x);
    ctx.lineTo(150 + x, 100 + x);

    // 绘制上兵
    for (let i = 0; i < 4; i++) {
      // 右边->上
      ctx.moveTo(3 + i * 100 + x, 150 - 3 + x);
      ctx.lineTo(12 + i * 100 + x, 150 - 3 + x);
      ctx.moveTo(3 + i * 100 + x, 150 - 12 + x);
      ctx.lineTo(3 + i * 100 + x, 150 - 3 + x);
      //右边->下
      ctx.moveTo(3 + i * 100 + x, 150 + 3 + x);
      ctx.lineTo(12 + i * 100 + x, 150 + 3 + x);
      ctx.moveTo(3 + i * 100 + x, 150 + 12 + x);
      ctx.lineTo(3 + i * 100 + x, 150 + 3 + x);

      // 左边->上
      ctx.moveTo((i + 1) * 100 - 3 + x, 150 - 3 + x);
      ctx.lineTo((i + 1) * 100 - 12 + x, 150 - 3 + x);
      ctx.moveTo((i + 1) * 100 - 3 + x, 150 - 12 + x);
      ctx.lineTo((i + 1) * 100 - 3 + x, 150 - 3 + x);

      // 左边->下
      ctx.moveTo((i + 1) * 100 - 3 + x, 150 + 3 + x);
      ctx.lineTo((i + 1) * 100 - 12 + x, 150 + 3 + x);
      ctx.moveTo((i + 1) * 100 - 3 + x, 150 + 12 + x);
      ctx.lineTo((i + 1) * 100 - 3 + x, 150 + 3 + x);
    }

    // 绘制上炮
    ctx.moveTo(50 - 3 + x, 100 - 3 + x);
    ctx.lineTo(50 - 12 + x, 100 - 3 + x);
    ctx.moveTo(50 - 3 + x, 100 - 12 + x);
    ctx.lineTo(50 - 3 + x, 100 - 3 + x);
    //
    ctx.moveTo(3 + 50 + x, 100 - 3 + x);
    ctx.lineTo(12 + 50 + x, 100 - 3 + x);
    ctx.moveTo(3 + 50 + x, 100 - 12 + x);
    ctx.lineTo(3 + 50 + x, 100 - 3 + x);
    //
    ctx.moveTo(50 - 3 + x, 100 + 3 + x);
    ctx.lineTo(50 - 12 + x, 100 + 3 + x);
    ctx.moveTo(50 - 3 + x, 100 + 12 + x);
    ctx.lineTo(50 - 3 + x, 100 + 3 + x);
    //
    ctx.moveTo(3 + 50 + x, 100 + 3 + x);
    ctx.lineTo(12 + 50 + x, 100 + 3 + x);
    ctx.moveTo(3 + 50 + x, 100 + 12 + x);
    ctx.lineTo(3 + 50 + x, 100 + 3 + x);

    //----------------
    ctx.moveTo(350 - 3 + x, 100 - 3 + x);
    ctx.lineTo(350 - 12 + x, 100 - 3 + x);
    ctx.moveTo(350 - 3 + x, 100 - 12 + x);
    ctx.lineTo(350 - 3 + x, 100 - 3 + x);
    //
    ctx.moveTo(3 + 350 + x, 100 - 3 + x);
    ctx.lineTo(12 + 350 + x, 100 - 3 + x);
    ctx.moveTo(3 + 350 + x, 100 - 12 + x);
    ctx.lineTo(3 + 350 + x, 100 - 3 + x);
    //
    ctx.moveTo(350 - 3 + x, 100 + 3 + x);
    ctx.lineTo(350 - 12 + x, 100 + 3 + x);
    ctx.moveTo(350 - 3 + x, 100 + 12 + x);
    ctx.lineTo(350 - 3 + x, 100 + 3 + x);
    //
    ctx.moveTo(3 + 350 + x, 100 + 3 + x);
    ctx.lineTo(12 + 350 + x, 100 + 3 + x);
    ctx.moveTo(3 + 350 + x, 100 + 12 + x);
    ctx.lineTo(3 + 350 + x, 100 + 3 + x);



    // 绘制下面九宫
    ctx.moveTo(150 + x, 350 + x);
    ctx.lineTo(250 + x, 450 + x);
    ctx.moveTo(250 + x, 350 + x);
    ctx.lineTo(150 + x, 450 + x);

    // 绘制下兵
    for (let i = 0; i < 4; i++) {
      // 右边->上
      ctx.moveTo(3 + i * 100 + x, 300 - 3 + x);
      ctx.lineTo(12 + i * 100 + x, 300 - 3 + x);
      ctx.moveTo(3 + i * 100 + x, 300 - 12 + x);
      ctx.lineTo(3 + i * 100 + x, 300 - 3 + x);
      //右边->下
      ctx.moveTo(3 + i * 100 + x, 300 + 3 + x);
      ctx.lineTo(12 + i * 100 + x, 300 + 3 + x);
      ctx.moveTo(3 + i * 100 + x, 300 + 12 + x);
      ctx.lineTo(3 + i * 100 + x, 300 + 3 + x);

      // 左边->上
      ctx.moveTo((i + 1) * 100 - 3 + x, 300 - 3 + x);
      ctx.lineTo((i + 1) * 100 - 12 + x, 300 - 3 + x);
      ctx.moveTo((i + 1) * 100 - 3 + x, 300 - 12 + x);
      ctx.lineTo((i + 1) * 100 - 3 + x, 300 - 3 + x);

      // 左边->下
      ctx.moveTo((i + 1) * 100 - 3 + x, 300 + 3 + x);
      ctx.lineTo((i + 1) * 100 - 12 + x, 300 + 3 + x);
      ctx.moveTo((i + 1) * 100 - 3 + x, 300 + 12 + x);
      ctx.lineTo((i + 1) * 100 - 3 + x, 300 + 3 + x);
    }


    // 绘制下炮
    ctx.moveTo(50 - 3 + x, 350 - 3 + x);
    ctx.lineTo(50 - 12 + x, 350 - 3 + x);
    ctx.moveTo(50 - 3 + x, 350 - 12 + x);
    ctx.lineTo(50 - 3 + x, 350 - 3 + x);
    //
    ctx.moveTo(3 + 50 + x, 350 - 3 + x);
    ctx.lineTo(12 + 50 + x, 350 - 3 + x);
    ctx.moveTo(3 + 50 + x, 350 - 12 + x);
    ctx.lineTo(3 + 50 + x, 350 - 3 + x);
    //
    ctx.moveTo(50 - 3 + x, 350 + 3 + x);
    ctx.lineTo(50 - 12 + x, 350 + 3 + x);
    ctx.moveTo(50 - 3 + x, 350 + 12 + x);
    ctx.lineTo(50 - 3 + x, 350 + 3 + x);
    //
    ctx.moveTo(3 + 50 + x, 350 + 3 + x);
    ctx.lineTo(12 + 50 + x, 350 + 3 + x);
    ctx.moveTo(3 + 50 + x, 350 + 12 + x);
    ctx.lineTo(3 + 50 + x, 350 + 3 + x);

    //----------------
    ctx.moveTo(350 - 3 + x, 350 - 3 + x);
    ctx.lineTo(350 - 12 + x, 350 - 3 + x);
    ctx.moveTo(350 - 3 + x, 350 - 12 + x);
    ctx.lineTo(350 - 3 + x, 350 - 3 + x);
    //
    ctx.moveTo(3 + 350 + x, 350 - 3 + x);
    ctx.lineTo(12 + 350 + x, 350 - 3 + x);
    ctx.moveTo(3 + 350 + x, 350 - 12 + x);
    ctx.lineTo(3 + 350 + x, 350 - 3 + x);
    //
    ctx.moveTo(350 - 3 + x, 350 + 3 + x);
    ctx.lineTo(350 - 12 + x, 350 + 3 + x);
    ctx.moveTo(350 - 3 + x, 350 + 12 + x);
    ctx.lineTo(350 - 3 + x, 350 + 3 + x);
    //
    ctx.moveTo(3 + 350 + x, 350 + 3 + x);
    ctx.lineTo(12 + 350 + x, 350 + 3 + x);
    ctx.moveTo(3 + 350 + x, 350 + 12 + x);
    ctx.lineTo(3 + 350 + x, 350 + 3 + x);
    ctx.stroke();
    ctx.closePath();
  }


  drawChessman() {
    const blackChessman = ['NONE', '将', '士', '象', '馬', '車', '炮', '卒'];
    const redChessman = ['NONE', '帥', '仕', '相', '馬', '車', '炮', '兵'];
    const padding = 50;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 9; j++) {
        const item = this.list[i][j];
        if (item.type !== 'NONE') {
          this.ctx.beginPath();
          this.ctx.arc(j * 50 + padding, i * 50 + padding, 22, 0, 2 * Math.PI);
          this.ctx.fillStyle = "white"
          this.ctx.fill();
          this.ctx.lineWidth = 2;
          this.ctx.strokeStyle = "black"
          if (item.type === 'RED') {
            this.ctx.strokeStyle = "red"
          }
          this.ctx.stroke();
          this.ctx.font = "40px 楷体";
          this.ctx.fillStyle = "black"

          this.ctx.fillStyle = "black"
          let text = blackChessman[item.chess];
          if (item.type === 'RED') {
            this.ctx.fillStyle = "red"
            text = redChessman[item.chess];
          }
          const width = this.ctx.measureText(text).width;
          this.ctx.fillText(text, j * 50 + padding - width / 2, i * 50 + padding + 14);


          this.ctx.stroke();
        }
      }
    }

    // //兵 炮 車 馬 相 仕 帥   
    // 黑方 卒 炮 車 馬 象 士 将
    // this.ctx.beginPath(); 
    // this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    // this.ctx.fillStyle="white"
    // this.ctx.fill();
    // this.ctx.stroke();
    // this.ctx.font = "20px serif";
    // this.ctx.fillStyle="black"
    // const text = "車"; 
    // const width = this.ctx.measureText(text).width;
    // console.log("fontHeight", fontHeight);
    // ctx.fillText(text, this.x - width / 2, this.y + 8);
  }
  public add(shape: Shape) {
    shape.draw(this.ctx);
  }
}

export { Stage };
