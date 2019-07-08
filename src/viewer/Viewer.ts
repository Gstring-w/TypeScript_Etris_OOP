/**
 * 实现Viewer类
 */

import { IViwer } from "../type/type";
import { Square } from "../core/Square";
import config from "../config/square_size";
import viewer from "../config/viewer.config";
export class ViewerDom implements IViwer {
  constructor(private _square: Square, private _container?: HTMLDivElement) {
    this._square = _square;
    this._container = _container;
  }

  private _isShow: boolean = true;
  show(): void {
    if (!this._isShow) {
      return;
    }
    if (this._container == undefined) {
      const div = document.createElement("div");
      div.style.width = config.width + "px";
      div.style.height = config.heigth + "px";
      div.style.boxSizing = "border-box";
      div.style.border = config.border;
      this._container = div;
      if (viewer.container) {
        viewer.container.style.width = `${viewer.width * config.width}px`;
        viewer.container.style.height = `${config.heigth *
          (viewer.height + 1)}px`;
        viewer.container.append(this._container);
      } else {
        document.body.append(this._container);
      }
    }

    this._container.style.position = "absolute";
    this._container.style.left = this._square.point.x * config.width + "px";
    this._container.style.top = this._square.point.y * config.heigth + "px";
    this._container.style.backgroundColor = this._square.color;
  }
  remove(): void {
    if (this._container && viewer.container) {
      viewer.container.removeChild(this._container);
      this._isShow = false;
    }
  }
}
