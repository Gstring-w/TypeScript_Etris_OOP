import { Point } from "../type/type";

/**
 *
 * 形状数组
 */

export const shap: any = {
  //“山”字型

  mountain: [
    {
      x: 0,
      y: 0
    },
    {
      x: -1,
      y: 0
    },
    {
      x: 1,
      y: 0
    },
    {
      x: 0,
      y: -1
    }
  ],

  // 七 字型
  sevenPositive: [
    {
      x: 0,
      y: 0
    },
    {
      x: -1,
      y: 0
    },
    {
      x: -2,
      y: 0
    },
    {
      x: 0,
      y: 1
    }
  ],
  sevenPassive: [
    {
      x: 0,
      y: 0
    },
    {
      x: -1,
      y: 0
    },
    {
      x: -2,
      y: 0
    },
    {
      x: 0,
      y: -1
    }
  ],

  // 田 字形
  field: [
    {
      x: 0,
      y: 0
    },
    {
      x: 1,
      y: 0
    },
    {
      x: 0,
      y: -1
    },
    {
      x: 1,
      y: -1
    }
  ],

  // Z 字形
  zonePassive: [
    {
      x: 0,
      y: 0
    },
    {
      x: 1,
      y: 0
    },
    {
      x: 0,
      y: -1
    },
    {
      x: -1,
      y: -1
    }
  ],
  zonePositive: [
    {
      x: 0,
      y: 0
    },
    {
      x: 1,
      y: 0
    },
    {
      x: 0,
      y: 1
    },
    {
      x: 1,
      y: -1
    }
  ],
  longStringPositive: [
    {
      x: 0,
      y: 0
    },
    {
      x: -1,
      y: 0
    },
    {
      x: 2,
      y: 0
    },
    {
      x: 1,
      y: 0
    }
  ],
  longStringPassive: [
    {
      x: 0,
      y: 0
    },
    {
      x: 0,
      y: -1
    },
    {
      x: 0,
      y: 2
    },
    {
      x: 0,
      y: 1
    }
  ],
  dot: [
    {
      x: 0,
      y: 0
    }
  ]
};

export enum configShapEnum {
  mountain = "mountain",
  sevenPositive = "sevenPositive",
  sevenPassive = "sevenPassive",
  field = "field",
  zonePassive = "zonePassive",
  zonePositive = "zonePositive",
  longStringPositive = "longStringPositive",
  longStringPassive = "longStringPassive",
  dot = "dot"
}

export enum configColor {
  red = "red",
  blue = "blue",
  black = "black",
  yellow = "yellow"
}
