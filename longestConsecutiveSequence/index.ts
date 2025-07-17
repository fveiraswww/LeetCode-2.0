import { test, expect } from "bun:test";

function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;

  const sortedNums = nums.sort((a, b) => a - b);

  let currentResult: number[] = [],
    result: number[] = [0, 1];

  for (let i = 0; i < nums.length; i++) {
    const currentNumb = sortedNums[i];

    if (typeof currentNumb !== "number") continue;

    if (!currentResult.length) {
      currentResult = [currentNumb, 1];
      continue;
    }

    if (currentResult[0] === currentNumb - 1) {
      currentResult = [currentNumb, (currentResult?.[1] ?? 1) + 1];

      if (Number(currentResult[1]) > Number(result[1])) {
        result = currentResult;
      }
    } else if (currentResult[0] !== currentNumb) {
      currentResult = [currentNumb, 1];
    }
  }

  return result?.[1] ?? 0;
}

test("example 1", () => {
  expect(longestConsecutive([99, 100, 4, 200, 1, 3, 2])).toBe(4);
});

test("example 2", () => {
  expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
});

test("example 3", () => {
  expect(longestConsecutive([1, 0, 1, 2])).toBe(3);
});

test("example 4", () => {
  expect(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])).toBe(7);
});
