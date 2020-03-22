/*

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.split(' ');
  return s.map((word) => {
    return word.split('').reverse('').join('')
  }).join(' ')
};

console.log(reverseWords("Let's get naked"))