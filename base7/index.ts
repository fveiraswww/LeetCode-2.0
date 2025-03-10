function getQuotientAndRemainder(numb: number, divisor: number) {
  const remainder = numb % divisor;
  const quotient = Math.floor(numb / divisor);

  return { remainder, quotient };
}

function convertToBase7(num: number): string {
  let finalRemainder = [];

  function getBase7(num, finalRemainder) {
    const { remainder, quotient } = getQuotientAndRemainder(num, 7);

    finalRemainder.push(remainder);

    if (num === 0) {
      return;
    }

    getBase7(quotient, finalRemainder);
  }

  getBase7(num, finalRemainder);

  let result = '';

  for (let i = finalRemainder.length - 1; i >= 0; i--) {
    if (!result.length) {
      if (finalRemainder[i] === 0) {
        continue;
      }

      result += String(finalRemainder[i]);
      continue;
    }

    result += String(Math.abs(finalRemainder[i]));
  }

  if (result.length) {
    return Number(result).toString();
  } else {
    return '0';
  }
}

console.log(convertToBase7(49));
