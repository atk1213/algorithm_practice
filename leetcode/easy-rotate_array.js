/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   while (k > 0) {
//       var last = nums.pop();
//       nums.unshift(last);
//       k--
//   }
//   return nums
// };


var rotate = function(nums, k) {
  do {
    nums.unshift(nums.pop());
    k--
  } while (k > 0)
}

// rotate([1, 2, 3, 4, 5, 6, 7], 3)