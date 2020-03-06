/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // init variable maxWidth
  var maxWidth = 0;
  // init variable maxArea
  var maxArea = 0;
  // with pointer1 at the beginning, iterate through the array with pointer2
  for (var i = 0; i < height.length; i++){
      for (var j = i + 1; j < height.length; j++){
          // at each iteration: increment maxWidth and check area
          maxWidth += 1;
          var currMaxHeight = height[i] > height[j] ? height[j] : height[i];
          // if area > maxArea
              // reassign maxArea to current area
          maxArea = (maxWidth * currMaxHeight) > maxArea ? (maxWidth * currMaxHeight) : maxArea
          // increment pointer1 and repeat   
      }
      maxWidth = 0;
  }
  // return maxArea 
  return maxArea
};