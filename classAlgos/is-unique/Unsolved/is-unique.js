// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in hash) {
      return false;
    } else {
      hash[arr[i]] = true;
    }
  }

  return true;
};
