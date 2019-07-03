import { Square } from "./core/Square";
import { IViwer, Point } from "./core/type";

const s = new Square({ x: 0, y: 0 }, "red");

class ViewerConsole implements IViwer {
  constructor(public square: Square) {
    this.square = square;
  }
  show(): void {
    console.log(
      `坐标为（${this.square.point.x},${this.square.point.x}）,颜色为${
        this.square.color
      }`
    );
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
}

s.viewer = new ViewerConsole(s);
s.viewer.show();

s.point = {
  x: 10,
  y: 10
};
console.log(s.viewer);
