import { ViewerDom } from "./viewer/Viewer";
import { Random } from "./core/Random";
import { Point } from "./type/type";
import { HashShapClass } from "./core/SquareGroupSub";
import { SquareMove } from "./core/SquareMove";
import { Game } from "./core/Game";
// import { SquareMove } from "./core/SquareMove";

// function createSquare(point: Point): SquareGroup {
//   const s = new arr[(Random.number(arr.length))](point, Random.color());

//   s.squarePointGroup.forEach(item => {
//     item.square.viewer = new ViewerDom(item.square);
//     item.square.viewer.show();
//   });
//   return s;
// }

// GameInterface.init();
// GameInterface.start(createSquare);

// const shap: string = Random.shap();
// const ShapClass = HashShapClass[shap as "dot"];
// const s = new ShapClass({ x: 5, y: 3 }, Random.color());
// s.squarePointGroup.forEach(item => {
//   item.square.viewer = new ViewerDom(item.square);
//   item.square.viewer.show();
// });

// // 游戏进程
// function gameExcuse() {
//   SquareMove.move(s.shap, s, { x: s.point.x, y: s.point.y + 1 });
// }

// function createSquare(point: Point) {
//   return new ShapClass(point, Random.color());
// }

// 游戏类  -> 依赖于SquarMove静态类
// 游戏开始，游戏结束，游戏暂停， （游戏开始时，可以传入一个函数？该函数执行完游戏开始，）
// 游戏积分

Game.start();
