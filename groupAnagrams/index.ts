import { expect, test } from "bun:test";

function groupAnagrams(strs: string[]): string[][] {
  const anagrams = new Map();

  for (let i = 0; i < strs.length; i++) {
    const currentWord = strs[i]
      ?.split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");

    if (anagrams.get(currentWord)) {
      anagrams.set(currentWord, [...anagrams.get(currentWord), strs[i]]);
    } else {
      anagrams.set(currentWord, [strs[i]]);
    }
  }

  return Array.from(anagrams.values());
}

test("example 1", () => {
  expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
});
