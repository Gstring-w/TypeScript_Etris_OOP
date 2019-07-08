/**
 *  游戏类  -> 依赖于SquarMove静态类
 *  游戏开始，游戏结束，游戏暂停， （游戏开始时，可以传入一个函数？该函数执行完游戏开始，）
 *  游戏积分
 */

import { SquareGroup } from "./SquareGroup";
import { Point, GameStaus } from "../type/type";
import { Random } from "./Random";
import { HashShapClass } from "./SquareGroupSub";
import viewerConfig from "../config/viewer.config";
import { ViewerDom } from "../viewer/Viewer";
import { SquareMove } from "./SquareMove";

export class Game {
  private static _time: number | null = null;

  private static _speed: number = 500;

  private static current: SquareGroup;

  private static game_staus: GameStaus;

  private static _start?: Function;
  private static _pause?: Function;
  private static _end?: Function;
  private static next: SquareGroup = Game.createSquare({
    x: viewerConfig.width + 3,
    y: 4
  });

  static start(cb1?: Function, cb2?: Function, cb3?: Function) {
    this._start = cb1;
    this._pause = cb2;
    this._end = cb3;
    this.game_staus = GameStaus.starting;
    var temp: boolean;
    if (this._start) {
      this._start();
    }
    if (this.current == undefined) {
      this.switch();
    }
    this._time = window.setInterval(() => {
      if (temp == false) {
        // 触底判断
        clearInterval(this._time as number);
        this.switch();

        // 触底消除
        this.remove();
        if (this.game_staus == GameStaus.end) {
          return;
        }
        this.start();
      }
      temp = SquareMove.move(this.current.shap, this.current, {
        x: this.current.point.x,
        y: this.current.point.y + 1
      });
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
      this.game_staus = GameStaus.end;
      if (this._end) this._end();
      return;
    }
    this.current.point = {
      x: Math.floor(viewerConfig.width / 2),
      y: -minY
    };
    this.next = this.createSquare({ x: viewerConfig.width + 3, y: 4 });
  }

  public static leftMove() {
    this.move("left");
  }

  public static rightMove() {
    this.move("right");
  }

  public static rotate() {
    this.current.rotate();
  }

  public static speadDown() {
    while (
      SquareMove.move(this.current.shap, this.current, {
        x: this.current.point.x,
        y: this.current.point.y + 1
      })
    ) {}
  }

  private static move(s: string) {
    const current: SquareGroup = this.current;
    let nextMovePoint: Point = { x: 0, y: 0 };
    if (s == "left") {
      nextMovePoint = { x: current.point.x - 1, y: current.point.y };
    } else if (s == "right") {
      nextMovePoint = { x: current.point.x + 1, y: current.point.y };
    }
    if (!SquareMove.canIMove(current.shap, nextMovePoint)) {
      return;
    }
    SquareMove.move(current.shap, this.current, nextMovePoint);
  }

  public static pause() {
    if (this._pause) this._pause();
    if (this._time) clearInterval(this._time);
  }

  private static remove() {
    // console.log(1111);
  }
}
