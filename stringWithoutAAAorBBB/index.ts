/* 
  Medium
  Given two integers a and b, return any string s such that:

  `s` has length a + b and contains exactly a 'a' letters, and exactly b 'b' letters,
  The substring 'aaa' does not occur in s, and
  The substring 'bbb' does not occur in s.
  

  Example 1:

  Input: a = 1, b = 2
  Output: "abb"
  Explanation: "abb", "bab" and "bba" are all correct answers.
  Example 2:

  Input: a = 4, b = 1
  Output: "aabaa"
  

  Constraints:

  0 <= a, b <= 100
  It is guaranteed such an s exists for the given a and b.
*/

function strWithoutAAAorBBB(a: number, b: number) {
  let s: string = '';

  while (a > 0 && b > 0) {
    if (a > b) {
      a -= 2;
      b -= 1;
      s += 'aab';
    } else if (b > a) {
      b -= 2;
      a -= 1;

      s += 'bba';
    } else {
      b -= 1;
      a -= 1;

      s += 'ab';
    }
  }

  if (a > 0) {
    s += 'a'.repeat(a);
  }

  if (b > 0) {
    s += 'b'.repeat(b);
  }

  return s;
}

strWithoutAAAorBBB(4, 4);
