// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
  let l = 0;
  let r = words.length - 1;

  while (l <= r) {
    const mid = Math.floor((l+r) / 2);

    if (words[mid] < words[mid - 1]) return mid;

    if (words[l] > words[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
};
