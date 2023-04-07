const getTextHeight = (text: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext("2d");
  ctx.font = "60px serif";
  ctx.fillText(text, 0, 0);
  const imgDt = ctx?.getImageData(0, 0, 200, 300);
  const data = imgDt?.data;
  let arr: number[] = [];
  for (let y = 0; y < 40; y++) {
    for (let x = 0; x < 50; x++) {
      let index = (y * 50 + x) * 4;
      let a = data[index + 3];
      if (a !== 0) {
        arr.push(y);
      }
    }
  }

  const height = Math.max(...arr) - Math.min(...arr);
  return height;
};

export { getTextHeight };
