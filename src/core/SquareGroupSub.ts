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
  public shap: Point[] = shap["mountain"];
}

class SevenPositiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["sevenPositive"], _point, _color);
  }
  public shap: Point[] = shap["sevenPositive"];
}

class SevenPassiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["sevenPassive"], _point, _color);
  }
  public shap: Point[] = shap["sevenPassive"];
}

class FieldShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["field"], _point, _color);
  }
  public rotate() {
    return;
  }
  public shap: Point[] = shap["field"];
}

class ZonePassiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["zonePassive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
  public shap: Point[] = shap["zonePassive"];
}

class ZonePositiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["zonePositive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
  public shap: Point[] = shap["zonePositive"];
}

class LongStringPositiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["longStringPositive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
  public shap: Point[] = shap["longStringPositive"];
}

class LongStringPassiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["longStringPassive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
  public shap: Point[] = shap["longStringPassive"];
}
class DotShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["field"], _point, _color);
  }
  public rotate() {
    return;
  }
  public shap: Point[] = shap["field"];
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
