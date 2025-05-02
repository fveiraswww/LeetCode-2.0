/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    Example 1:

    Input: s = "anagram", t = "nagaram"

    Output: true

    Example 2:

    Input: s = "rat", t = "car"

    Output: false

    

    Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
*/

import { expect, test } from "bun:test";

const num = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function isAnagram(s: string, t: string): boolean {
  const a = s
    .split("")
    .sort((a, b) => num[a] - num[b])
    .toString();

  const b = t
    .split("")
    .sort((a, b) => num[a] - num[b])
    .toString();

  if (a === b) return true;

  return false;
}

test("Example 1", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});

test("Example 2", () => {
  expect(isAnagram("rat", "car")).toBe(false);
});

test("Example 3", () => {
  expect(isAnagram("aacc", "ccac")).toBe(false);
});
