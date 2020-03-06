/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var container = {};
  for (var val = 0; val <= nums.length; val++){
      container[nums[val]] = container[nums[val]] + 1 || 1 
      if (container[nums[val]] > 1) {return true}
  }
  return false
};