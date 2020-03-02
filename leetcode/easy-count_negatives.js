/*
Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  var result = 0;
  for(var row = 0; row < grid.length; row++){
      for(var column = 0; column < grid[row].length; column++){
          if (grid[row][column] < 0){
              result += 1
          }
      }
  }
  return result
};