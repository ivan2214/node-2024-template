import { debug } from "console";
import config from "./config";

export function add(a: number, b: number): number {
  if (config.debug) {
    debug(`Calling add function with args ${a} and ${b}`);
  }
  return a + b;
}
