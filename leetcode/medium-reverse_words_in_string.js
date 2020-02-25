/*
Given an input string, reverse the string word by word.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').filter((elem) => elem !== '').reverse().join(' ');
};