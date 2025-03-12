function findColumnWidth(grid: number[][]): number[] {
  let result: number[] = [];

  for (let x = 0; x < grid[0].length; x++) {
    if (!grid[0][x] && grid[0][x] !== 0) break;

    let maxWidth = 0;

    for (let y = 0; y < grid.length; y++) {
      const number = String(grid[y][x]).length;

      if (number > maxWidth) maxWidth = number;
    }

    result.push(maxWidth);
    maxWidth = 0;
  }

  return result;
}
