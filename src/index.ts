import { SquareMove } from "./core/SquareMove";
import { ViewerDom } from "./viewer/Viewer";
import { shap } from "./config/square_group";
import { SquareGroup } from "./core/SquareGroup";
import { GameInterface } from "./viewer/GameInterface";
import { Random } from "./core/Random";
import { hash, arr } from "./core/SquareGroupSub";

GameInterface.init();

// const squareShap = shap[Random.shap()];
// const s = new SquareGroup(squareShap, { x: 8, y: 3 }, Random.color());

const s = new arr[(Random.number(arr.length))]({ x: 8, y: 3 }, Random.color());
s.squarePointGroup.forEach(item => {
  item.square.viewer = new ViewerDom(item.square);
  item.square.viewer.show();
});

document.onclick = () => {
  s.rotate();
};
