/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var numsSum = 0;
  var realSum = 0;
  for (var i = 0; i < nums.length; i++){
      numsSum += nums[i];
      realSum += i
  }
  realSum += nums.length;
  return realSum-numsSum
};