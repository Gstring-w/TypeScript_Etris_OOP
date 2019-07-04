import { Square } from "../core/Square";

export interface Point {
  readonly x: number;
  readonly y: number;
}

export interface IViwer {
  /**
   *
   */
  show(): void;
  remove(): void;
}

// export interface ISize {
//   width: number;
//   height: number;
// }

export interface ISquareGroup {
  square: Square;
}
