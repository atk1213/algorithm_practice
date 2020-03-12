/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // var inputNum = num;
  // var result;
  // do {
  //     result = 0;
  //     inputNum.toString().split('').forEach((val) => {
  //         result+= Number(val)
  //     });
  //     inputNum = result
  // } while (result > 9)
  // return result
  
  var inputNum = num.toString();
  var result = 0;
  if (inputNum.length > 1) {
      for (var i = 0; i < inputNum.length; i++) {
          result += Number(inputNum[i])
      }
      return addDigits(result)
  }
  return num
};