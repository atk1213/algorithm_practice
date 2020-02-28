/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var result = 1;
  while (result*result <= x) {
      result +=1
  }
  return result - 1
};