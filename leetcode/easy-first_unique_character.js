/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  var container = {};
  var val;
  for (var i = 0; i < s.length; i++){
      if (container[s[i]] === 0 || !container[s[i]]){
          container[s[i]] = 1
      } else {
          container[s[i]] += 1
      }
  }
  for (var char in container) {
      if (container[char] === 1){
          val = char;
          break
      }
  }
  return s.indexOf(val)
};