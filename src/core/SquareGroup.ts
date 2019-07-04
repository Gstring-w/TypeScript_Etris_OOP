import { Point, ISquareGroup } from "../type/type";
import { Square } from "./Square";
import { SquareMove } from "./SquareMove";

/**
 * 形状类
 */

export class SquareGroup {
  private _squareAbsolutePointGroup: ISquareGroup[] = [];
  constructor(
    private _squareRelativePointGroup: Point[],
    private _point: Point,
    private _color: string
  ) {
    if (!SquareMove.canIMove(_squareRelativePointGroup, _point)) {
      console.log("位置无效！请前往'/config/viewer.ts'修改配置或修改初始位置");
      return;
    }
    this._point = _point;
    let square: Square;
    let point: Point;
    _squareRelativePointGroup.forEach(item => {
      point = {
        x: item.x + _point.x,
        y: item.y + _point.y
      };
      square = new Square(point, _color);
      this._squareAbsolutePointGroup.push({ square });
    });
  }

  public get point() {
    return this._point;
  }

  public set point(v: Point) {
    this._point = v;
    this._squareRelativePointGroup.forEach((item, index) => {
      this._squareAbsolutePointGroup[index].square.point = {
        x: item.x + v.x,
        y: item.y + v.y
      };
    });
  }

  // 暴露出数组，给外部添加viewer
  public get squarePointGroup() {
    return this._squareAbsolutePointGroup;
  }
}
