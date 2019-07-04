import { Square } from "./core/Square";
import { ViewerDom } from "./viewer/Viewer";
import Shape from "./config/square_group";
import { SquareGroup } from "./core/SquareGroup";

const newS = new SquareGroup(Shape.dot, { x: 10, y: 10 }, "red");
newS.squarePointGroup.forEach(item => {
  item.square.viewer = new ViewerDom(item.square);
  item.square.viewer.show();
});
