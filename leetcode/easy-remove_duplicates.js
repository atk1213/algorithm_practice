/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// var removeDuplicates = function(nums) {
//   var prev;
//   for (var valInd = 0; valInd < nums.length; valInd++){
//       if (prev == undefined){
//           prev = nums[valInd]
//       } else if (prev == nums[valInd]){
//           while (prev == nums[valInd]){
//               nums.splice(valInd, 1);
//           }
//       } 
//       prev = nums[valInd]
//   }
// };

// var removeDuplicates = function(nums) {
//   var index = 0;
//   for (var valInd = 1; valInd < nums.length; valInd++){
//       if (nums[valInd] == nums[valInd - 1]){
//           index++
//       } else {
//           nums[valInd-index] = nums[valInd]
//       }
//   }
//   nums.splice(nums.length-index)
//   return nums.length
// };

var removeDuplicates = function(nums) {
    for (var i = nums.length-1; i >= 0; i--){
        if (nums[i] == nums[i-1]){
            nums.splice(i, 1);
        }
    }
    return nums.length
};