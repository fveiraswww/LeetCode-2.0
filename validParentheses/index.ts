import { expect, test } from "bun:test";

// 1st try - valid O(n)

// function isValid(s: string): boolean {
//   if (s.length % 2 !== 0) return false;

//   const stack = s.split("");
//   const currentStack = [];

//   while (stack.length) {
//     const lastElement = stack.shift();

//     if (lastElement === "{" || lastElement === "[" || lastElement === "(") {
//       currentStack.push(lastElement);
//       continue;
//     }

//     if (lastElement === "}" && currentStack[currentStack.length - 1] === "{") {
//       currentStack.pop();
//       continue;
//     }
//     if (lastElement === "]" && currentStack[currentStack.length - 1] === "[") {
//       currentStack.pop();
//       continue;
//     }
//     if (lastElement === ")" && currentStack[currentStack.length - 1] === "(") {
//       currentStack.pop();
//       continue;
//     }

//     return false;
//   }

//   return currentStack.length ? false : true;
// }

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;

  let stack: string[] = [];

  for (let current of s) {
    if (current === "(" || current === "{" || current === "[")
      stack.push(current);
    else {
      if (
        (current === ")" && stack.pop() === "(") ||
        (current === "}" && stack.pop() === "{") ||
        (current === "]" && stack.pop() === "[")
      )
        continue;

      return false;
    }
  }

  return stack.length === 0;
}

test("example 1", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("example 2", () => {
  expect(isValid("(]")).toBe(false);
});

test("example 3", () => {
  expect(isValid("([])")).toBe(true);
});
