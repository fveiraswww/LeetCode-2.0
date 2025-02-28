// Number of Subarrays That Match a Pattern I

/*
You are given a 0-indexed integer array nums of size n, 
and a 0-indexed integer array pattern of size m consisting 
of integers -1, 0, and 1.

A subarray nums[i..j] of size m + 1 is said to match the pattern if the 
following conditions hold for each element pattern[k]:

nums[i + k + 1] > nums[i + k] if pattern[k] == 1.
nums[i + k + 1] == nums[i + k] if pattern[k] == 0.
nums[i + k + 1] < nums[i + k] if pattern[k] == -1.
Return the count of subarrays in nums that match the pattern.
*/

function check(i, k, pattern): boolean {
  switch (pattern) {
    case 1:
      return i < k;
    case 0:
      return i == k;
    case -1:
      return i > k;
  }

  return false;
}

function countMatchingSubarrays(nums: number[], pattern: number[]): number {
  const subarrayLength = pattern.length + 1;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    const subarray = nums.slice(i, i + subarrayLength);
    let validSubarray: boolean = true;
    let index = 0;

    while (validSubarray && index < subarrayLength - 1) {
      validSubarray = check(
        subarray[index],
        subarray[index + 1],
        pattern[index]
      );
      index++;
    }

    if (validSubarray) res++;
  }

  return res;
}

countMatchingSubarrays([1, 4, 4, 1, 3, 5, 5, 3], [1, 0, -1]);
