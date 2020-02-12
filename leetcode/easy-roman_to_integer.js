/*
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */

var roman = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

// var romanToInt = function(s) {
//   var num = 0;
//   for (var charIndex = 0; charIndex <= s.length-1; charIndex++){
//     if (roman[s[charIndex]] == 1 && roman[s[charIndex+1]] == 5){
//       num += 4;
//       charIndex++
//     } else if (roman[s[charIndex]] == 1 && roman[s[charIndex+1]] == 10){
//       num += 9;
//       charIndex++
//     } else if (roman[s[charIndex]] == 10 && roman[s[charIndex+1]] == 50){
//       num += 40;
//       charIndex++
//     } else if (roman[s[charIndex]] == 10 && roman[s[charIndex+1]] == 100){
//       num += 90;
//       charIndex++
//     } else if (roman[s[charIndex]] == 100 && roman[s[charIndex+1]] == 500){
//       num += 400;
//       charIndex++
//     } else if (roman[s[charIndex]] == 100 && roman[s[charIndex+1]] == 1000){
//       num += 900;
//       charIndex++
//     } else {
//       num += roman[s[charIndex]]
//     }
//   }
//   return num
// };

var romanToInt = function(s) {
  var num = 0;
  for (var charIndex = 0; charIndex <= s.length-1; charIndex++){
    if (roman[s[charIndex]] < roman[s[charIndex+1]]){
      num += roman[s[charIndex+1]] - roman[s[charIndex]];
      charIndex++
    } else {
      num += roman[s[charIndex]]
    }
  }
  return num
}