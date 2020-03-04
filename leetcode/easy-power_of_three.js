/*
Given an integer, write a function to determine if it is a power of three.

Could you do it without using any loop / recursion?
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  var i = 0; 
  while (Math.pow(3, i) < n){
      i += 1
  }
  return Math.pow(3, i) === n ? true : false
};