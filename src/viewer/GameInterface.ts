/**
 *
 * 根据配置初始化游戏界面
 */
import size from "../config/square_size";
import viewer from "../config/viewer.config";
export class GameInterface {
  static init() {
    if (viewer.container) {
      viewer.container.style.width = `${size.width * viewer.width}px`;
      viewer.container.style.height = `${size.heigth * viewer.height}px`;
      viewer.container.style.border = `1px solid #000`;
    }
  }
}
