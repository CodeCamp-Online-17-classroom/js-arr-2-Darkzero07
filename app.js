const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]

function squareArr(arr) {
  return arr.map((item) => Math.pow(item, 2));
}

console.log(squareArr(arr));
