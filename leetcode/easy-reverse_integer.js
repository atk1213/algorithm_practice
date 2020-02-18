/*
Given a 32-bit signed integer, reverse digits of an integer.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var val = 0;
  var isNegative = false;
  if (x.toString()[0] === '-'){
      isNegative = true;
      x = x * -1
  }
  while (x > 0) {
      var lastNum = x % 10;
      val = val * 10 + lastNum;
      x = Math.floor(x/10)
  }
  val = isNegative ? val * -1 : val;
  if (val > 2147483647 || val < -2147483648){
      return 0
  } else {
      return val
  }
};