/*
  Prime Number of Set Bits in Binary Representation
*/

function numbToBinary(numb: number, res) {
  if (numb === 0) {
    return;
  }

  const quotient = parseInt(String(numb / 2));
  const remainder = numb % 2;

  res.push(remainder);

  numbToBinary(quotient, res);
}

function isPrime(number) {
  if (number <= 1) return false;
  let divisor = number - 1;

  while (divisor > 1) {
    let remainder = number % divisor;

    if (remainder === 0) return false;

    divisor--;
  }

  return true;
}

function countPrimeSetBits(left: number, right: number): number {
  let response = 0;
  const minorNumber = Math.min(left, right);
  const maxNumber = Math.max(left, right);
  let range: number[] = [minorNumber];

  for (let i = minorNumber; i >= minorNumber && i <= maxNumber - 1; i++) {
    range.push(range[range.length - 1] + 1);
  }

  for (const number of range) {
    let res = [];
    numbToBinary(number, res);
    const bits = res.reduce((acc, current) => {
      if (current === 1) return acc + 1;
      return acc;
    }, 0);

    if (isPrime(bits)) {
      response++;
    }
  }

  return response;
}

countPrimeSetBits(10, 15);
