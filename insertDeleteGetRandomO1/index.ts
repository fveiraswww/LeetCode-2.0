/*
  Implement the RandomizedSet class:

  RandomizedSet() Initializes the RandomizedSet object.
  bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
  bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
  int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
  You must implement the functions of the class such that each function works in average O(1) time complexity.


  Input
  ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
  [[], [1], [2], [2], [], [1], [2], []]
  Output
  [null, true, false, true, 2, true, false, 2]
*/

class RandomizedSet {
  randomized: Array<null | boolean | number>;

  constructor() {
    this.randomized = [];
  }

  insert(val: number): boolean {
    if (typeof val === 'number' && !this.randomized.includes(val)) {
      this.randomized.push(val);

      return true;
    }

    return false;
  }

  remove(val: number): boolean {
    if (typeof val === 'number' && this.randomized.includes(val)) {
      const index = this.randomized.lastIndexOf(val);
      this.randomized.splice(index, 1);

      return true;
    }

    return false;
  }

  getRandom(): number {
    const randomNumber =
      this.randomized[Math.floor(Math.random() * this.randomized.length)];

    if (typeof randomNumber === 'number') {
      return randomNumber;
    }

    return 0;
  }
}

const randomizedSet = new RandomizedSet();
randomizedSet.insert(1);
randomizedSet.remove(2);
randomizedSet.insert(2);
randomizedSet.getRandom();
randomizedSet.remove(1);
randomizedSet.insert(2);
randomizedSet.getRandom();
