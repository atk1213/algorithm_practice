/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  // initialize prefix variable with shortest string and assign to prefix var
  var prefix = strs.sort((a, b) => a.length - b.length)[0] || '';
  // compare prefix to each element in array
  strs.forEach((str) => {
      for (var i = 0; i < prefix.length; i++){
          // if letter is different
          if (prefix[i] !== str[i]){
              // slice up to element
              prefix = prefix.substring(0, i)
          }
      }
  })
  // return prefix
  return prefix
};