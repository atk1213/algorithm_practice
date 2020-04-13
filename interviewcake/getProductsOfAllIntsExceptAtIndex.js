/*
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
*/
const getProductsOfAllIntsExceptAtIndex = (arr) => {
  let result = Array(arr.length).fill(1);
  for (let resultInd = 0; resultInd < arr.length; resultInd++){
      for (let arrInd = 0; arrInd < arr.length; arrInd++){
          if (arrInd !== resultInd){
              result[resultInd] *= arr[arrInd]
          }
      }
  }
  return result
}
getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4])
// [(7, 3, 4), (1, 3, 4), (1, 7, 4), (1, 7, 3)] -> [82, 12, 28, 21]