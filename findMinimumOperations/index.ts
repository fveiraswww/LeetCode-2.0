/*
    input: s1, s2, s3
    output: number of operations to make inputs ===
    if is not possible return -1

    remove 1 char === 1 operation
*/

function findMinimumOperations(s1: string, s2: string, s3: string): number {
  if (s1[0] !== s2[0] || s1[0] !== s3[0]) {
    return -1;
  }

  let operations = 0;
  let equal = false;

  while (!equal) {
    if (s1 === s2 && s1 === s3) {
      equal = true;
      break;
    }

    const biggerString = [s1, s2, s3].reduce((acc, current) => {
      if (acc < current) {
        return (acc = current);
      } else return acc;
    }, s1);

    if (biggerString === s1) {
      s1 = s1.slice(0, s1.length - 1);
    } else if (biggerString === s2) {
      s2 = s2.slice(0, s2.length - 1);
    } else if (biggerString === s3) {
      s3 = s3.slice(0, s3.length - 1);
    }

    operations++;
  }

  return operations;
}

findMinimumOperations('abc', 'abb', 'ab');
