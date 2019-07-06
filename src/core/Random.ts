/**
 * 处理配置文件，并随机抛出一个形状，颜色
 */

import { configShapEnum, configColor } from "../config/square_group";
import { Shap } from "../type/type";

export class Random {
  static shap(): string {
    let arr: any[] = [];
    for (const key in configShapEnum) {
      if (configShapEnum.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr[Math.floor(Math.random() * arr.length)];
  }
  static color(): string {
    let arr: any[] = [];
    for (const key in configColor) {
      if (configColor.hasOwnProperty(key)) {
        const element = configColor[key];
        arr.push(element);
      }
    }
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
