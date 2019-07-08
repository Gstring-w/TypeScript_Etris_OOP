/**
 *  游戏类  -> 依赖于SquarMove静态类
 *  游戏开始，游戏结束，游戏暂停， （游戏开始时，可以传入一个函数？该函数执行完游戏开始，）
 *  游戏积分
 */
// import { SquareMove } from "./core/SquareMove";
import { SquareGroup } from "./SquareGroup";
import { Point } from "../type/type";
import { Random } from "./Random";
import { HashShapClass } from "./SquareGroupSub";
import viewerConfig from "../config/viewer.config";
import { ViewerDom } from "../viewer/Viewer";
import { SquareMove } from "./SquareMove";

export class Game {
  private static _time: number | null = null;

  private static _speed: number = 300;

  private static current: SquareGroup;

  private static next: SquareGroup = Game.createSquare({
    x: viewerConfig.width + 3,
    y: 4
  });

  static start(cb?: Function) {
    var temp: boolean;
    if (cb) {
      cb();
    }
    if (this.current == undefined) {
      this.switch();
    }
    this._time = window.setInterval(() => {
      temp = SquareMove.move(this.current.shap, this.current, {
        x: this.current.point.x,
        y: this.current.point.y + 1
      });
      if (temp == false) {
        // 触底判断
        clearInterval(this._time as number);
        this.switch();
        cb = typeof cb != "undefined" ? cb : undefined;
        this.start(cb);
      }
    }, this._speed);
  }

  private static createSquare(point: Point) {
    const shap: string = Random.shap();
    const ShapClass = HashShapClass[shap as "dot"];
    const s = new ShapClass(point, Random.color());
    s.squarePointGroup.forEach(item => {
      item.square.viewer = new ViewerDom(item.square);
      item.square.viewer.show();
    });
    return s;
  }

  private static switch() {
    this.current = this.next;
    var minY = 0;
    this.next.shap.forEach(item => {
      if (minY > item.y) minY = item.y;
    });
    var point: Point = {
      x: Math.floor(viewerConfig.width / 2),
      y: -minY
    };
    if (!SquareMove.canIMove(this.current.shap, point)) {
      // console.log(this._time);
      // clearInterval(this._time);
      console.log("game over!");
      return;
    }
    this.current.point = {
      x: Math.floor(viewerConfig.width / 2),
      y: -minY
    };
    this.next = this.createSquare({ x: viewerConfig.width + 3, y: 4 });
  }
}
