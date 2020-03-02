/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  var arr = n.toString().split('');
  var multiple = 1;
  var sum = 0;
  arr.forEach((val) => {
      multiple *= val;
      sum += Number(val)
  })
  return multiple-sum
};