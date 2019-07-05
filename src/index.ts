import { ViewerDom } from "./viewer/Viewer";
import { GameInterface } from "./viewer/GameInterface";
import { Random } from "./core/Random";
import { arr } from "./core/SquareGroupSub";
import { Point } from "./type/type";
import { SquareGroup } from "./core/SquareGroup";
// import { SquareMove } from "./core/SquareMove";

function createSquare(point: Point): SquareGroup {
  const s = new arr[(Random.number(arr.length))](point, Random.color());

  s.squarePointGroup.forEach(item => {
    item.square.viewer = new ViewerDom(item.square);
    item.square.viewer.show();
  });
  return s;
}

GameInterface.init();
GameInterface.start(createSquare);

class CreateSquare {
  private s: SquareGroup;
  constructor(private _shap: Point[], point: Point) {
    this.s = new arr[(Random.number(arr.length))](point, Random.color());
  }

  // public excuse(){
  //   SquareMove.move(this)
  // }
}
