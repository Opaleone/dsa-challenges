// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
  let commonNum = arrA[0];

  const hash = {};

  for (let i = 0; i < arrA.length; i++) {
    hash[arrA[i]] = true;
  }

  for (let i = 0; i < arrB.length; i++) {
    if (hash[arrB[i]]) {
      return arrB[i];
    }
  }

  return commonNum;
};
