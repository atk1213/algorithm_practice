/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // init result number variable, temp variable, and input value
  var revNum = 0;
  var temp = 0;
  var input = x;
  // if input is 0
  if (x === 0){
      return true
  // check for negative sign or a value that ends in 0
  } else if (x < 0 || x % 10 === 0){
      return false
  }
  // use modulo to take last value and add it to revNum while manipulated input is > 0
  while (input !== 0){
    // get ones value and store to temp variable
    temp = input % 10;
    // multiply revNum by ten and add temp value
    revNum = revNum * 10 + temp
    // floor float value to get positive integer
    input = Math.floor(input/10)
  }
  // return boolean of comparison
  return x === revNum    
};


// alternate solution with string conversion
var isPalindrome = function(x) {
  var val = 0;
  var str = x.toString();

  for (var i = str.length - 1; i >= 0; i--){
    val = val * 10 + Number(str[i]);
  }
  return x === val
}