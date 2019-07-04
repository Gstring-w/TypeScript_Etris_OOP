import { Point, ISquareGroup } from "../type/type";
import { Square } from "./Square";

/**
 * 形状类
 */

export class SquareGroup {
  private _squareAbsolutePointGroup: ISquareGroup[] = [];
  constructor(
    private _squareRelativePointGroup: readonly Point[],
    private _point: Point,
    private _color: string
  ) {
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
