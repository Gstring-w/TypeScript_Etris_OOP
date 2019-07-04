import { SquareMove } from "./core/SquareMove";
import { ViewerDom } from "./viewer/Viewer";
import { shap } from "./config/square_group";
import { SquareGroup } from "./core/SquareGroup";
import { GameInterface } from "./viewer/GameInterface";
import { Random } from "./core/Random";

GameInterface.init();

const squareShap = shap[Random.shap()];
const s = new SquareGroup(squareShap, { x: 8, y: 3 }, Random.color());

s.squarePointGroup.forEach(item => {
  item.square.viewer = new ViewerDom(item.square);
  item.square.viewer.show();
});

document.body.onkeypress = (e: KeyboardEvent): void => {
  if (e.key == "s") {
    SquareMove.move(squareShap, s, {
      x: s.point.x,
      y: s.point.y + 1
    });
  } else if (e.key == "a") {
    SquareMove.move(squareShap, s, {
      x: s.point.x - 1,
      y: s.point.y
    });
  } else if (e.key == "d") {
    SquareMove.move(squareShap, s, {
      x: s.point.x + 1,
      y: s.point.y
    });
  } else if (e.key == "w") {
    SquareMove.move(squareShap, s, {
      x: s.point.x,
      y: s.point.y - 1
    });
  }
};

// setInterval(() => {
//   SquareMove.move(squareShap, s, {
//     x: s.point.x,
//     y: s.point.y + 1
//   });
// }, 300);
