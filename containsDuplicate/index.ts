function containsDuplicate(nums: number[]): boolean {
  let current = {};

  for (let index = 0; index < nums.length; index++) {
    let currentElement = nums[index].toString();

    if (current[currentElement]) {
      return true;
    } else {
      current[currentElement] = 1;
    }
  }

  return false;
}
