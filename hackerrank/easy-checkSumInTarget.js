
var arraySum = function(inputs, tests){
  for(var i = 0; i < inputs.length - 1; i++){
    for(var j = i + 1; j < inputs.length; j++){
      if (tests.includes(inputs[i] + inputs[j])){
        return true
      }
    }
  }
  return false
}

console.log(arraySum([-1, 8, 3], [2, 7, 3])) //true

