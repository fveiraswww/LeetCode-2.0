/* 
  3201. Find the Maximum Length of Valid Subsequence I

  You are given an integer array nums.
  A subsequence sub of nums with length x is called valid if it satisfies:

  (sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2.
  Return the length of the longest valid subsequence of nums.

  A subsequence is an array that can be derived from another array by deleting some or no 
  elements without changing the order of the remaining elements.
*/

function maximumLength(nums: number[]): number {
  // (2 + 2 = 4) % 2 = 0
  // (2 + 2 = 4) % 2 = 0
  // (2 + 2 = 4) % 2 = 0

  // (1 + 2 = 3) % 2 = 1
  // (2 + 3 = 5) % 2 = 1
  // (3 + 4 = 5) % 2 = 1

  const { evenNumbers, oddNumbers } = nums.reduce(
    (acc, current) => {
      if (current % 2 == 0) {
        return { ...acc, evenNumbers: (acc.evenNumbers += 1) };
      } else {
        return { ...acc, oddNumbers: (acc.oddNumbers += 1) };
      }
    },
    {
      oddNumbers: 0,
      evenNumbers: 0,
    }
  );

  let evenOddsSequence = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0 && nums[i + 1] % 2 == 1) {
      evenOddsSequence++;
      continue;
    }

    if (nums[i] % 2 == 1 && nums[i + 1] % 2 == 0) {
      evenOddsSequence++;
      continue;
    }
  }

  evenOddsSequence++;

  const maxSubsequence = Math.max(evenNumbers, oddNumbers, evenOddsSequence);

  return maxSubsequence;
}

maximumLength([1, 2, 3, 4]);
