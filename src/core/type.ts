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
