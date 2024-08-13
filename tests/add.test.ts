import { add } from "../src/utils";

it("should add two numbers", () => {
  expect(add(0, 0)).toBe(0);
  expect(add(0, 1)).toBe(1);
  expect(add(1, 1)).toBe(2);
});
