class Board {
    private x: number;
    private y: number;
    constructor() {
        this.x = 50;
        this.y = 50;
    }
    draw(ctx: CanvasRenderingContext2D) {

        const x = 10;
        const y = 10;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, x);
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

        ctx.font = "40px serif";
        ctx.fillText("楚河", 75, 250);
        ctx.fillText("汉界", 275, 250);

        // 绘制上面九宫
        ctx.moveTo(150 + x, 0 + x);
        ctx.lineTo(250 + x, 100 + x);
        ctx.moveTo(250 + x, 0 + x);
        ctx.lineTo(150 + x, 100 + x);

        // 绘制上兵
        for (let i = 0; i < 4; i++) {
            // 右边->上
            ctx.moveTo(3+i*100 + x, 150-3 + x);
            ctx.lineTo(12+i*100 + x, 150-3 + x);
            ctx.moveTo(3+i*100 + x, 150-12 + x);
            ctx.lineTo(3+i*100 + x, 150-3 + x);
            //右边->下
            ctx.moveTo(3+i*100 + x, 150+3 + x);
            ctx.lineTo(12+i*100 + x, 150+3 + x);
            ctx.moveTo(3+i*100 + x, 150+12 + x);
            ctx.lineTo(3+i*100 + x, 150+3 + x);

            // 左边->上
            ctx.moveTo((i+1)*100-3 + x, 150-3 + x);
            ctx.lineTo((i+1)*100-12 + x, 150-3 + x);
            ctx.moveTo((i+1)*100-3+x, 150-12 + x);
            ctx.lineTo((i+1)*100-3+x, 150-3 + x);

             // 左边->下
             ctx.moveTo((i+1)*100-3 + x, 150+3 + x);
             ctx.lineTo((i+1)*100-12 + x, 150+3 + x);
             ctx.moveTo((i+1)*100-3+x, 150+12 + x);
             ctx.lineTo((i+1)*100-3+x, 150+3 + x);
        }

        // 绘制上炮
        ctx.moveTo(50-3 + x, 100-3 + x);
        ctx.lineTo(50-12 + x, 100-3 + x);
        ctx.moveTo(50-3 + x, 100-12 + x);
        ctx.lineTo(50-3 + x, 100-3 + x);
        //
        ctx.moveTo(3+50 + x, 100-3 + x);
        ctx.lineTo(12+50 + x, 100-3 + x);
        ctx.moveTo(3+50 + x, 100-12 + x);
        ctx.lineTo(3+50 + x, 100-3 + x);
        //
        ctx.moveTo(50-3 + x, 100+3 + x);
        ctx.lineTo(50-12 + x, 100+3 + x);
        ctx.moveTo(50-3 + x, 100+12 + x);
        ctx.lineTo(50-3 + x, 100+3 + x);
        //
        ctx.moveTo(3+50 + x, 100+3 + x);
        ctx.lineTo(12+50 + x, 100+3 + x);
        ctx.moveTo(3+50 + x, 100+12 + x);
        ctx.lineTo(3+50 + x, 100+3 + x);

        //----------------
        ctx.moveTo(350-3 + x, 100-3 + x);
        ctx.lineTo(350-12 + x, 100-3 + x);
        ctx.moveTo(350-3 + x, 100-12 + x);
        ctx.lineTo(350-3 + x, 100-3 + x);
        //
        ctx.moveTo(3+350 + x, 100-3 + x);
        ctx.lineTo(12+350 + x, 100-3 + x);
        ctx.moveTo(3+350 + x, 100-12 + x);
        ctx.lineTo(3+350 + x, 100-3 + x);
        //
        ctx.moveTo(350-3 + x, 100+3 + x);
        ctx.lineTo(350-12 + x, 100+3 + x);
        ctx.moveTo(350-3 + x, 100+12 + x);
        ctx.lineTo(350-3 + x, 100+3 + x);
        //
        ctx.moveTo(3+350 + x, 100+3 + x);
        ctx.lineTo(12+350 + x, 100+3 + x);
        ctx.moveTo(3+350 + x, 100+12 + x);
        ctx.lineTo(3+350 + x, 100+3 + x);
        


        // 绘制下面九宫
        ctx.moveTo(150 + x, 350 + x);
        ctx.lineTo(250 + x, 450 + x);
        ctx.moveTo(250 + x, 350 + x);
        ctx.lineTo(150 + x, 450 + x);

        // 绘制下兵
        for (let i = 0; i < 4; i++) {
            // 右边->上
            ctx.moveTo(3+i*100 + x, 300-3 + x);
            ctx.lineTo(12+i*100 + x, 300-3 + x);
            ctx.moveTo(3+i*100 + x, 300-12 + x);
            ctx.lineTo(3+i*100 + x, 300-3 + x);
            //右边->下
            ctx.moveTo(3+i*100 + x, 300+3 + x);
            ctx.lineTo(12+i*100 + x, 300+3 + x);
            ctx.moveTo(3+i*100 + x, 300+12 + x);
            ctx.lineTo(3+i*100 + x, 300+3 + x);

            // 左边->上
            ctx.moveTo((i+1)*100-3 + x, 300-3 + x);
            ctx.lineTo((i+1)*100-12 + x, 300-3 + x);
            ctx.moveTo((i+1)*100-3+x, 300-12 + x);
            ctx.lineTo((i+1)*100-3+x, 300-3 + x);

             // 左边->下
             ctx.moveTo((i+1)*100-3 + x, 300+3 + x);
             ctx.lineTo((i+1)*100-12 + x, 300+3 + x);
             ctx.moveTo((i+1)*100-3+x, 300+12 + x);
             ctx.lineTo((i+1)*100-3+x, 300+3 + x);
        }


        // 绘制下炮
        ctx.moveTo(50-3 + x, 350-3 + x);
        ctx.lineTo(50-12 + x, 350-3 + x);
        ctx.moveTo(50-3 + x, 350-12 + x);
        ctx.lineTo(50-3 + x, 350-3 + x);
        //
        ctx.moveTo(3+50 + x, 350-3 + x);
        ctx.lineTo(12+50 + x, 350-3 + x);
        ctx.moveTo(3+50 + x, 350-12 + x);
        ctx.lineTo(3+50 + x, 350-3 + x);
        //
        ctx.moveTo(50-3 + x, 350+3 + x);
        ctx.lineTo(50-12 + x, 350+3 + x);
        ctx.moveTo(50-3 + x, 350+12 + x);
        ctx.lineTo(50-3 + x, 350+3 + x);
        //
        ctx.moveTo(3+50 + x, 350+3 + x);
        ctx.lineTo(12+50 + x, 350+3 + x);
        ctx.moveTo(3+50 + x, 350+12 + x);
        ctx.lineTo(3+50 + x, 350+3 + x);

        //----------------
        ctx.moveTo(350-3 + x, 350-3 + x);
        ctx.lineTo(350-12 + x, 350-3 + x);
        ctx.moveTo(350-3 + x, 350-12 + x);
        ctx.lineTo(350-3 + x, 350-3 + x);
        //
        ctx.moveTo(3+350 + x, 350-3 + x);
        ctx.lineTo(12+350 + x, 350-3 + x);
        ctx.moveTo(3+350 + x, 350-12 + x);
        ctx.lineTo(3+350 + x, 350-3 + x);
        //
        ctx.moveTo(350-3 + x, 350+3 + x);
        ctx.lineTo(350-12 + x, 350+3 + x);
        ctx.moveTo(350-3 + x, 350+12 + x);
        ctx.lineTo(350-3 + x, 350+3 + x);
        //
        ctx.moveTo(3+350 + x, 350+3 + x);
        ctx.lineTo(12+350 + x, 350+3 + x);
        ctx.moveTo(3+350 + x, 350+12 + x);
        ctx.lineTo(3+350 + x, 350+3 + x);
        ctx.stroke();
    }
}

export { Board };
