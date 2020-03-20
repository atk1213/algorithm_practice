var getMinUniqueSum = (arr) => {
  arr = arr.sort((a, b) => a - b);
  var result = [];
  var index = 0;
  while (result.length < arr.length){
    if (result.includes(arr[index])){
      arr[index] += 1;
    } else {
      result.push(arr[index]);
      index += 1
    }
  }
  return result
}

console.log(getMinUniqueSum([1, 7, 3, 9, 5, 1, 3, 3]))