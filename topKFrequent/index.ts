import { expect, test } from "bun:test";

function topKFrequent(nums: number[], k: number): number[] {
  const freq: { [key: number]: number } = {};

  for (const num of nums) {
    if (freq[num] === undefined) freq[num] = 0;

    freq[num] += 1;
  }

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .splice(0, k)
    .map((val) => Number(val[0]));
}

test("example 1", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
});

test("example 2", () => {
  expect(topKFrequent([3, 0, 1, 0], 1)).toEqual([0]);
});

test("example 3", () => {
  expect(topKFrequent([1, 2], 2)).toEqual([1, 2]);
});

test("example 4", () => {
  expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toEqual([2, -1]);
});

test("example 5", () => {
  expect(topKFrequent([5, 2, 5, 3, 5, 3, 1, 1, 3], 2)).toEqual([3, 5]);
});
