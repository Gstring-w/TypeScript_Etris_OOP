import { SquareGroup } from "./SquareGroup";
import { Point } from "../type/type";
import { shap } from "../config/square_group";
/**
 * 各种子类
 */

class MountainShap extends SquareGroup {
  //   private _shapSub: Point[] = shap["mountain"];
  constructor(_point: Point, _color: string) {
    super(shap["mountain"], _point, _color);
  }
}

class SevenPositiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["sevenPositive"], _point, _color);
  }
}

class SevenPassiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["sevenPassive"], _point, _color);
  }
}

class FieldShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["field"], _point, _color);
  }
  public rotate() {
    return;
  }
}

class ZonePassiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["zonePassive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
}

class ZonePositiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["zonePositive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
}

class LongStringPositiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["longStringPositive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
}

class LongStringPassiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["longStringPassive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
}
class DotShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["field"], _point, _color);
  }
  public rotate() {
    return;
  }
}

export const hash = {
  mountain: MountainShap,
  sevenPositive: SevenPositiveShap,
  sevenPassive: SevenPassiveShap,
  field: FieldShap,
  zonePassive: ZonePassiveShap,
  zonePositive: ZonePositiveShap,
  longStringPositive: LongStringPositiveShap,
  longStringPassive: LongStringPassiveShap,
  dot: DotShap
};

export const arr = [
  DotShap,
  LongStringPassiveShap,
  LongStringPositiveShap,
  ZonePositiveShap,
  ZonePassiveShap,
  MountainShap,
  SevenPositiveShap,
  SevenPassiveShap,
  FieldShap
];
