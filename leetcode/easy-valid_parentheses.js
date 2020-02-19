/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let container = [];
  for(let i = 0; i < s.length; i++){
      if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
          container.push(s[i])
      } else if(s[i] === ')'){
          let lastElem = container.pop();
          if (lastElem !== '('){
              return false
          }
      } else if (s[i] === ']'){
          let lastElem = container.pop();
          if (lastElem !== '['){
              return false
          } 
      } else if(s[i] === '}'){
          let lastElem = container.pop();
          if (lastElem !== '{'){
              return false
          }
      }
  }
  return container.length === 0 ? true : false
};