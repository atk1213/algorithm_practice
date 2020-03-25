var findNumber = function (arr) {
  var count = 0;
  arr.forEach(val => {
    if (val.toString().length % 2 == 0){
      count += 1
    } 
  })
  return count
}

