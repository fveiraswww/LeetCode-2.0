import { test, expect } from "bun:test";

function isValidSudoku(board: string[][]): boolean {
  const BOARD = 81;

  const columnMap = new Map<number, Set<number>>();
  const rowMap = new Map<number, Set<number>>();
  const squares = new Map<number, Set<number>>();

  for (let i = 0; i < BOARD; i++) {
    // Every 9 elements you advance one row
    const row = Math.floor(i / 9);

    // The remainder (%) tells you how much you moved within that row
    const column = i % 9;
    const cell = Number(board[row]?.[column]);
    const square = Math.floor(row / 3) * 3 + Math.floor(column / 3);

    if (isNaN(cell)) continue;

    if (!columnMap.get(column)) columnMap.set(column, new Set());
    if (!rowMap.get(row)) rowMap.set(row, new Set());
    if (!squares.get(square)) squares.set(square, new Set());

    if (columnMap.get(column)?.has(cell)) return false;
    if (rowMap.get(row)?.has(cell)) return false;
    if (squares.get(square)?.has(cell)) return false;

    columnMap.get(column)?.add(cell);
    rowMap.get(row)?.add(cell);
    squares.get(square)?.add(cell);
  }

  return true;
}

test("example 1", () => {
  expect(
    isValidSudoku([
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ]),
  ).toBe(true);
});
