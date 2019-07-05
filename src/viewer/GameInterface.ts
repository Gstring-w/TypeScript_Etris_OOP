/**
 *
 * 根据配置初始化游戏界面
 */
import size from "../config/square_size";
import viewer from "../config/viewer.config";
import { Point } from "../type/type";
import { SquareGroup } from "../core/SquareGroup";
import { ViewerDom } from "./Viewer";
import { ECANCELED } from "constants";
import { SquareMove } from "../core/SquareMove";

export class GameInterface {
  private static timer: number;
  private static fast: number = 1000;
  private static currentSquare: SquareGroup;
  private static nextSquare: SquareGroup;
  static init() {
    if (viewer.container) {
      viewer.container.style.width = `${size.width * viewer.width}px`;
      viewer.container.style.height = `${size.heigth * viewer.height}px`;
      viewer.container.style.border = `1px solid #000`;
    }
  }
  private static initPoint(): Point {
    return { x: Math.ceil(viewer.width / 2), y: 2 };
  }

  private static initNextPoint(): Point {
    return { x: Math.ceil(viewer.width + 3), y: 2 };
  }

  static start(createSquare: Function) {
    GameInterface.currentSquare = createSquare(GameInterface.initPoint());
    GameInterface.nextSquare = createSquare(GameInterface.initNextPoint());

    setInterval(() => {
      GameInterface.currentSquare.point = {
        x: GameInterface.currentSquare.point.x,
        y: GameInterface.currentSquare.point.y + 1
      };
    }, 1000);
  }
}
