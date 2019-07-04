/**
 * 随机类，随机显示颜色，形状
 */

import { shap } from "../config/square_group";
import { Point } from "../type/type";
export class Random {
  private static _shap: any[] = [];
  private static init() {
    // console.log(new shap().field);
    for (const key in shap) {
      if (shap.hasOwnProperty(key)) {
        Random._shap.push(key);
      }
    }
  }

  private static random(x: number): number {
    return Math.floor(Math.random() * x);
  }

  static shap(): string {
    Random.init();
    let num: number = Random.random(Random._shap.length);
    console.log(num);
    return Random._shap[num];
  }

  static color(): string {
    return `rgb(${Random.random(255)},${Random.random(255)},${Random.random(
      255
    )})`;
  }
}
