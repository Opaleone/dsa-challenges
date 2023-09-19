// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

const arrayIntersection = (arr1, arr2) => {
  const values = [];

  let hash = {};

  for (const val of arr1) {
    hash[val] = val;
  }

  for (const val of arr2) {
    if (val in hash) {
      values.push(val);
    }
  }

  return values;
};
