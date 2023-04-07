import { Stage } from "./core";
import { Chessman } from "./core/chessman";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const stage = new Stage(canvas);

const chessman = new Chessman();

stage.add(chessman);
