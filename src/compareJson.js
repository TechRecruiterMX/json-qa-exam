export function compareJson(actual, expected) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}
