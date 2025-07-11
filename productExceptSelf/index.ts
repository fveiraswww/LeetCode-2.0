import { expect, test } from "bun:test";

function productExceptSelf(nums: number[]): number[] {
  let n = nums.length;
  let result = Array.from(nums).fill(0);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= Number(nums[i]);
  }

  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = Number(result[i]) * postfix;
    postfix *= Number(nums[i]);
  }

  return result;
}

test("example 1", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test("example 2", () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
});
