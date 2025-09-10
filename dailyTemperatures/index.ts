import { expect, test } from "bun:test";

/*
  # goal: answer[i] = how many days until a warmer temp

  # plan:
  # 1. start with result full of zeros (0 * temperatures.length)
  # 2. loop temps with (i, temp)
  #    - i = index to calc day diff
  #    - temp = current temp
  # 3. while stack not empty && current temp > last temp in stack
  #    - pop last stack item and update its result with diff
  #    - keep iter until current temp < last temp in stack
  # 4. push current (i, temp) to stack
*/

function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = Array.from(temperatures).fill(0);
  const stack: Array<number[]> = [];

  for (const [index, temp] of temperatures.entries()) {
    while (stack && temp > stack?.[stack.length - 1]?.[1]!) {
      const stackT = stack.pop();

      if (typeof stackT?.[0] === "number") {
        result[stackT[0]] = index - stackT[0];
      }
    }

    stack.push([index, temp]);
  }

  return result;
}

test("example 1", () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
    1, 1, 4, 2, 1, 1, 0, 0,
  ]);
});

test("example 2", () => {
  expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
});

test("example 3", () => {
  expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
});

test("example 4", () => {
  expect(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70])).toEqual([
    8, 1, 5, 4, 3, 2, 1, 1, 0, 0,
  ]);
});
