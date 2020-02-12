/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  for(var i = 0; i < nums.length; i++){
    for(var j = 1; j < nums.length; j++){
      if (nums[j] === target - nums[i] && i !== j ){
          return [i, j]
      }
    }
  }
};