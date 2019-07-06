/**
 *  游戏类  -> 依赖于SquarMove静态类
 *  游戏开始，游戏结束，游戏暂停， （游戏开始时，可以传入一个函数？该函数执行完游戏开始，）
 *  游戏积分
 */
// import { SquareMove } from "./core/SquareMove";
import { SquareGroup } from "./SquareGroup";
import { Point, shapClass } from "../type/type";
import { Random } from "./Random";
import { HashShapClass } from "./SquareGroupSub";
import viewerConfig from "../config/viewer.config";
import { ViewerDom } from "../viewer/Viewer";
import { SquareMove } from "./SquareMove";

export class Game {
  private static _time: number | null = null;
  private static current: SquareGroup = Game.createSquare({ x: 5, y: 3 });
  private static next: SquareGroup = Game.createSquare(Game.caluPointNext());
  static start(cb?: Function) {
    Game._time = window.setInterval(() => {
      SquareMove.move(Game.current.shap, Game.current, {
        x: Game.current.point.x,
        y: Game.current.point.y + 1
      });
    }, 500);
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

  private static caluPointNext(): Point {
    return { x: viewerConfig.width + 3, y: 3 };
  }

  private static switch() {
    Game.current = Game.next;
    Game.current.point = {
      x: 5,
      y: 3
    };
    Game.next = Game.createSquare(Game.caluPointNext());
  }
}
