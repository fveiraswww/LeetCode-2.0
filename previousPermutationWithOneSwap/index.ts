function prevPermOpt1(arr: number[]): number[] {
  let n = arr.length;
  let i = n - 2;

  // 9
  while (i >= 0 && arr[i] <= arr[i + 1]) {
    i--;
  }

  if (i < 0) return arr;

  // 7 (el + grande pero - que i)
  let j = n - 1;
  while (arr[j] >= arr[i] || (arr[j] === arr[j - 1] && j - 1 > i)) {
    j--;
  }

  // swap here
  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
}

prevPermOpt1([1, 9, 4, 6, 7]);
