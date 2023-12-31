// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {
  // LINEAR SEARCH 
  //    BEST IF ARRAY NOT SORTED
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;

  // BINARY SEARCH
  //    ARRAY MUST BE SORTED FOR THIS TO WORK

  // arr.sort((a, b) => a - b)

  // let l = 0;
  // let r = arr.length - 1;

  // while (l < r) {
  //   let mid = Math.floor((l + r) / 2);

  //   if (arr[mid] === target) return mid;
  //   else if (arr[mid] > target) l = mid + 1;
  //   else r = mid - 1;
  // }

  // return -1;
};
