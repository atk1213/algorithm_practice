/*
Implement pow(x, n), which calculates x raised to the power n (x^n).

Note:
  -100.0 < x < 100.0
  n is a 32-bit signed integer, within the range [−231, 231 − 1]
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // var ans = x;
  // var power = 1;
  // if (n == 0) {
  //     return 1 
  // } else if (n > 0){
  //     while (power < n){
  //         ans *= x;
  //         power ++
  //     }
  //     return ans        
  // } else if (n < 0) {
  //     var absValExp = n * -1;
  //     while (power < absValExp){
  //         ans *= x;
  //         power ++
  //     }
  //     return 1/ans   
  // }

  if (n === 0){
      return 1
  } else if (n === 1) {
      return x
  } else if (x === 0) {
      return 0
  } else if (n > 0) {
      return (n % 2 === 1 ? x : 1) * myPow(x*x, Math.floor(n/2))
  } else {
      return myPow(1/x, -n)
  }
};