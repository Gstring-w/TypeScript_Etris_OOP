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
  // public shap: Point[] = shap["mountain"];

  // public get shapSub() {
  //   return this.shap;
  // }
}

class SevenPositiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["sevenPositive"], _point, _color);
  }
  // public shap: Point[] = shap["sevenPositive"];
  // public get shapSub() {
  //   return this.shap;
  // }
}

class SevenPassiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["sevenPassive"], _point, _color);
  }
  // public shap: Point[] = shap["sevenPassive"];
  // public get shapSub() {
  //   return this.shap;
  // }
}

class FieldShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["field"], _point, _color);
  }
  public rotate() {
    return;
  }
  // public shap: Point[] = shap["field"];
  // public get shapSub() {
  //   return this.shap;
  // }
}

class ZonePassiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["zonePassive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
  // public shap: Point[] = shap["zonePassive"];
  // public get shapSub() {
  //   return this.shap;
  // }
}

class ZonePositiveShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["zonePositive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
  // public shap: Point[] = shap["zonePositive"];
  // public get shapSub() {
  //   return this.shap;
  // }
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
  // public shap: Point[] = shap["longStringPassive"];

  constructor(_point: Point, _color: string) {
    super(shap["longStringPassive"], _point, _color);
  }
  public rotate() {
    super.rotate();
    this.isClock = !this.isClock;
  }
  // public get shapSub() {
  //   return this.shap;
  // }
}
class DotShap extends SquareGroup {
  constructor(_point: Point, _color: string) {
    super(shap["field"], _point, _color);
  }
  public rotate() {
    return;
  }
  // public shap: Point[] = shap["field"];
  // public get shapSub() {
  //   return this.shap;
  // }
}

export const HashShapClass = {
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
