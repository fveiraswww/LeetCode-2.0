/* 
  Minimum Operations to Exceed Threshold Value I

  nums: 0-indexed arr
  k: int

  In one operation, you can remove one occurrence 
  of the smallest element of nums.

  output: min number of operations so that all 
  elements of the array are greater than or equal to k.

  e.g.
  nums = [2,11,10,1,3], k = 10
  output = 3
*/

function minOperations(nums: number[], k: number): number {
  const orderedNumbers = nums.sort((a, b) => a - b);
  let operations = 0;

  for (let i = 0; i < orderedNumbers.length; i++) {
    if (orderedNumbers[i] < k) {
      operations++;
    } else {
      break;
    }
  }

  return operations;
}

const nums = [2, 11, 10, 1, 3];
const k = 10;

// const nums = [1, 1, 2, 4, 9];
// const k = 1;

// const nums = [1, 1, 2, 4, 9];
// const k = 9;

minOperations(nums, k);
