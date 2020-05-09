/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  // var filteredArr = [];
  // for (var i = 0; i < nums.length; i++){
  //     if (!filteredArr.includes(nums[i])){
  //         filteredArr.push(nums[i])
  //     }
  // }
  // filteredArr.sort((a,b) => a-b);
  // if (filteredArr.length < 3){
  //     return filteredArr[filteredArr.length-1]
  // } else if (filteredArr.length >= 3){
  //     return filteredArr[filteredArr.length-3]
  // }

  if(nums.length<3) return Math.max(...nums);
  var numsSet = new Set(nums)
  if(numsSet.size<3) {
    return Math.max(...numsSet)
  };
  for(var i=0;i<2;i++){
      numsSet.delete(Math.max(...numsSet))
  }
  return Math.max(...numsSet);
};