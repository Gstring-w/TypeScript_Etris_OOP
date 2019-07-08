import { Game } from "./core/Game";

//Game.start(start); // 第一个参数为游戏开始，第二个参数为游戏暂停， 第三个参数为游戏结束

window.onkeypress = (e: KeyboardEvent) => {
  switch (e.key) {
    case "t":
      Game.start(start, pause, end);
      break;
    case "y":
      Game.pause();
      break;
    case "w":
      Game.rotate();
      break;
    case "a":
      Game.leftMove();
      break;
    case "d":
      Game.rightMove();
      break;
    case "s":
      Game.speadDown();
      break;
    default:
      return;
  }
};

function start() {
  console.log("game start!");
}

function pause() {
  console.log("game pasue!");
}
function end() {
  console.log("game over!");
}
