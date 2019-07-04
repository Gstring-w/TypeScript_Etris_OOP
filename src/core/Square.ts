/**
 * 小方块类
 */

import { Point, IViwer } from "../type/type";

export class Square {
  private _point: Point;
  private _color: string;
  private _iViewer?: IViwer;
  constructor(point: Point, color: string) {
    this._point = point;
    this._color = color;
  }

  public get point() {
    return this._point;
  }
  public set point(v: Point) {
    this._point = v;
    // 可以完成显示
    if (this._iViewer) {
      this._iViewer.show();
    }
  }

  public get color() {
    return this._color;
  }
  public get viewer() {
    return this._iViewer as IViwer;
  }
  public set viewer(v: IViwer) {
    this._iViewer = v;
  }
}
