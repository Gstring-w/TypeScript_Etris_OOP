import { Point, Direction } from "../type/type";
import viewer from "../config/viewer.config";
import { SquareGroup } from "./SquareGroup";
/**
 * 关于移动的判断
 */
// 类型保护函数

function isDir(obj: any): obj is Direction {
  if (typeof obj.point == undefined) {
    return true;
  }
  return false;
}

export class SquareMove {
  static canIMove(_shape: Point[], moveToPoint: Point): boolean {
    var _pointGroup: Point[] = [];
    _shape.forEach(item => {
      let temp: Point = {
        x: item.x + moveToPoint.x,
        y: item.y + moveToPoint.y
      };
      _pointGroup.push(temp);
    });

    if (
      _pointGroup.some(
        p => p.x < 1 || p.x > viewer.width || p.y < 1 || p.y > viewer.height
      )
    ) {
      return false;
    }
    return true;
  }

  static move(_shape: Point[], groupOrDir: SquareGroup, moveToPoint: Point) {
    if (SquareMove.canIMove(_shape, moveToPoint)) {
      groupOrDir.point = {
        x: moveToPoint.x,
        y: moveToPoint.y
      };
    }
    // } else {
    //   console.log("移动位置无效！请前往'/config/viewer.ts'修改配置");
    // }
    // } else {
    //   if (groupOrDir == Direction.down) {
    //     moveToPoint = {
    //       x: moveToPoint.x,
    //       y: moveToPoint.y + 1
    //     };
    //   } else if (groupOrDir == Direction.left) {
    //     moveToPoint = {
    //       x: moveToPoint.x - 1,
    //       y: moveToPoint.y
    //     };
    //   } else if (groupOrDir == Direction.right) {
    //     moveToPoint = {
    //       x: moveToPoint.x + 1,
    //       y: moveToPoint.y
    //     };
    //   } else {
    //     moveToPoint = {
    //       x: moveToPoint.x,
    //       y: moveToPoint.y - 1
    //     };
    //   }
    // }
  }
}
