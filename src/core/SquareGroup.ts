import { Point, ISquareGroup } from "../type/type";
import { Square } from "./Square";
import { SquareMove } from "./SquareMove";

/**
 * 形状类
 */

export class SquareGroup {
  private _squareGroup: ISquareGroup[] = [];
  constructor(
    private _shap: Point[],
    private _point: Point,
    private _color: string
  ) {
    if (!SquareMove.canIMove(_shap, _point)) {
      console.log("位置无效！请前往'/config/viewer.ts'修改配置或修改初始位置");
      return;
    }
    this._point = _point;
    let square: Square;
    let point: Point;
    _shap.forEach(item => {
      point = {
        x: item.x + _point.x,
        y: item.y + _point.y
      };
      square = new Square(point, _color);
      this._squareGroup.push({ square });
    });
  }

  public get point() {
    return this._point;
  }

  public set point(v: Point) {
    this._point = v;
    this._shap.forEach((item, index) => {
      this._squareGroup[index].square.point = {
        x: item.x + v.x,
        y: item.y + v.y
      };
    });
  }

  public get squarePointGroup() {
    return this._squareGroup;
  }

  // 旋转形状
  public isClock = true;

  public calRotatePoint(): Point[] {
    let result: Point[];
    if (this.isClock) {
      result = this._shap.map(item => ({
        x: -item.y,
        y: item.x
      }));
    } else {
      result = this._shap.map(item => ({
        x: item.y,
        y: -item.x
      }));
    }
    return result;
  }

  public rotate() {
    this._shap = this.calRotatePoint();
    if (
      SquareMove.canIMove(this._shap, {
        x: this.point.x,
        y: this.point.y
      })
    ) {
      this.point = {
        x: this.point.x,
        y: this.point.y
      };
    } else {
      console.log("该位置不能变形");
    }
  }
}
