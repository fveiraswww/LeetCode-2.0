import { expect, test } from "bun:test";

function evalRPN(tokens: string[]): number {
  let stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const currentToken = tokens[i];

    if (isNaN(Number(currentToken))) {
      let op2 = stack.pop();
      let op1 = stack.pop();

      if (currentToken === "+") stack.push(Number(op1) + Number(op2));

      if (currentToken === "-") stack.push(Number(op1) - Number(op2));

      if (currentToken === "*") stack.push(Number(op1) * Number(op2));

      if (currentToken === "/")
        stack.push(Math.trunc(Number(op1) / Number(op2)));

      continue;
    }

    stack.push(Number(currentToken));
  }

  return Number(stack[0]) ?? 0;
}

test("example 1", () => expect(evalRPN(["2", "1", "+", "3", "*"])).toBe(9));
test("example 2", () => expect(evalRPN(["4", "13", "5", "/", "+"])).toBe(6));
test("example 3", () =>
  expect(
    evalRPN([
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ]),
  ).toBe(22));
