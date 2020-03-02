/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  var container = {};
  for (var num of nums){
      if (container[num]) {
          container[num] += 1
      } else {
          container[num] = 1
      }
  }
  for (var val in container) {
      if (container[val] === 1){
          return val
      }
  }
};