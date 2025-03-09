function bubbleSort(numbs: number[]) {
  let n = numbs.length;
  let swap: boolean;

  do {
    swap = false;

    for (let i = 0; i < n - 1; i++) {
      if (numbs[i] > numbs[i + 1]) {
        [numbs[i], numbs[i + 1]] = [numbs[i + 1], numbs[i]];

        swap = true;
      }
    }
    n--;
  } while (swap);

  return numbs;
}

bubbleSort([3, 4, 1, 2]);
