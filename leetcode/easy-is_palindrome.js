/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var original = s.toLowerCase().replace(/[^\w]|_/g , '');
  var reversed = original.split('').reverse().join('');
  return original == reversed
};