import { Stage } from "./core";
import { Chessman } from "./core/Chessman";
import { Board } from "./core/Board";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const stage = new Stage(canvas);

const chessman = new Chessman();

const board = new Board();


stage.add(board);
// stage.add(chessman);
