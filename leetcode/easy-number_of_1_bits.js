/*
Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // var result = 0;
  // for (var i = 0; i < n.toString(2).length; i++){
  //     if (n.toString(2)[i] == 1){
  //         result += 1
  //     }
  // }
  // return result
  return n.toString(2).split("").filter(item => item === '1').length;
};