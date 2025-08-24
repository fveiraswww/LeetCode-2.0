import { expect, test } from "bun:test";

function generateParenthesis(n: number): string[] {
  let result: string[] = [];

  function generateCombination(s: string, open: number, close: number) {
    if (s.length === n * 2) {
      result.push(s);
    }

    if (open < n) {
      generateCombination(s.concat("("), open + 1, close);
    }

    if (close < n && close < open) {
      generateCombination(s.concat(")"), open, close + 1);
    }
  }

  generateCombination("", 0, 0);

  return result;
}

test("example 1", () => {
  expect(generateParenthesis(3)).toEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
  ]);
});

test("example 2", () => {
  expect(generateParenthesis(1)).toEqual(["()"]);
});

test("example 3", () => {
  expect(generateParenthesis(2)).toEqual(["(())", "()()"]);
});
