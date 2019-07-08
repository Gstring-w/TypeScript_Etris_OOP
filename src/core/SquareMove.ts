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
  // 触底的方块(全部)

  static soleSquareArr: Point[] = [];

  // [] index下标对应列数，每个index上的值对应每个列上的方块y坐标
  static soleSquare: number[] = new Array(viewer.width).fill(viewer.height);

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
        p =>
          p.x < 1 || p.x > viewer.width || p.y < 0 || p.y > this.soleSquare[p.x]
      )
    ) {
      return false;
    }
    return true;
  }

  static move(_shape: Point[], group: SquareGroup, moveToPoint: Point) {
    if (SquareMove.canIMove(_shape, moveToPoint)) {
      group.point = {
        x: moveToPoint.x,
        y: moveToPoint.y
      };
      return true;
    } else {
      var tempSoleSquareArr: Point[];
      tempSoleSquareArr = group.squarePointGroup.map(item => {
        return item.square.point;
      });
      this.soleSquareArr.push(...tempSoleSquareArr);
      this.filterSoleSquareArr();
      return false;
    }
  }

  //判断是否能下落
  static filterSoleSquareArr() {
    this.soleSquareArr.forEach(item => {
      if (this.soleSquare[item.x] >= item.y) {
        this.soleSquare[item.x] = item.y - 1;
      }
    });
    this.soleSquareArr = []; // 清零 防止数组过大 导致页面卡顿
  }
}
