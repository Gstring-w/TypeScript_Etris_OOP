import { Square } from "./core/Square";
import { ViewerDom } from "./viewer/Viewer";
import Shape from "./config/square_group";
import { SquareGroup } from "./core/SquareGroup";

// const s = new Square({ x: 0, y: 0 }, "red");

// s.viewer = new ViewerDom(s);
// s.viewer.show();

// s.point = {
//   x: 10,
//   y: 10
// };

const newS = new SquareGroup(Shape.mountain, { x: 10, y: 10 }, "red");
newS.squarePointGroup.forEach(item => {
  item.square.viewer = new ViewerDom(item.square);
  item.square.viewer.show();
});
