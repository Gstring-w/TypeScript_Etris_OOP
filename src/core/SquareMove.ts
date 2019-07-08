import { Point, Direction } from "../type/type";
import viewer from "../config/viewer.config";
import { SquareGroup } from "./SquareGroup";
import { Square } from "./Square";
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
  // static allSoleSquare: Square[] = [];
  static soleSquareFilterArr: Point[] = [];

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
          p.x < 0 ||
          p.x > viewer.width - 1 ||
          p.y < 0 ||
          p.y > this.soleSquare[p.x]
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
      var tempSoleSquareArr: Point[] = [];

      group.point = {
        x: group.point.x,
        y: group.point.y
      };

      group.squarePointGroup.forEach(item => {
        tempSoleSquareArr.push(item.square.point);
      });

      this.soleSquareFilterArr.push(...tempSoleSquareArr);

      this.filterSoleSquareArr();
      return false;
    }
  }

  //判断是否能下落
  private static filterSoleSquareArr() {
    this.soleSquareFilterArr.forEach(item => {
      if (this.soleSquare[item.x] >= item.y) {
        this.soleSquare[item.x] = item.y - 1;
      }
    });
    this.soleSquareFilterArr = []; // 清零 防止数组过大 导致页面卡顿
  }

  // this.allSoleSquare = this.allSoleSquare.filter(s => s.point.y != i);
}
