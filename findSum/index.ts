/* 
  Let us consider a problem to find the sum of natural numbers, there 
  are several ways of doing that but the simplest approach is simply 
  to add the numbers starting from 0 to n.

  f(n) = 0 + 1 + 2 + 3 + ... + n

  but there is another mathematical approach of representing this,
  
  f(n) = n + f(n-1)    n>=1
*/

function findSum(n) {
  if (n === 0) return 0;

  return n + findSum(n - 1);
}

let n = 5;
console.log(findSum(n));
