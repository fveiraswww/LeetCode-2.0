/* 
  nums: 0-indexed integer array
  A pair of integers x and y is called a strong pair if 
  it satisfies the condition:

  |x - y| <= min(x, y)

  1. create strong pairs
  2. their bitwise XOR is the maximum among all strong pairs in the array
  3. Return the maximum bitwise XOR
*/

function maximumStrongPairXor(nums: number[]): number {
  let maxXor = 0;

  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      if (Math.abs(nums[x] - nums[y]) <= Math.min(nums[x], nums[y])) {
        const diffBetweenNums = nums[x] ^ nums[y];

        if (diffBetweenNums > maxXor) maxXor = diffBetweenNums;
      }
    }
  }

  return maxXor;
}

maximumStrongPairXor([5, 6, 25, 30]);
