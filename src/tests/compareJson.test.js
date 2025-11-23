import { compareJson } from "../src/compareJson.js";

test("Compare simple JSON objects", () => {
  const actual = { a: 1, b: 2 };
  const expected = { a: 1, b: 2 };

  expect(compareJson(actual, expected)).toBe(true);
});
