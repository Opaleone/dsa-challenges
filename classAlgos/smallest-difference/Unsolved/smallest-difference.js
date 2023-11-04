// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:


// My initial sol
// var smallestDifference = function (arr1, arr2) {
//   let smallest = Infinity;
//   let newArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       const curDiff = Math.abs(arr1[i] - arr2[j]);

//       if (curDiff < smallest) {
//         smallest = curDiff;
//         newArr = [arr1[i], arr2[j]];
//       }
//     }
//   }

//   return newArr;
// };


// More efficient sol
var smallestDifference = function (arr1, arr2) {
  let bestDiff = Infinity;
  let newArr = [];
  let l = 0;
  let r = 0;

  while (l < arr1.length && r < arr2.length) {
    const curDiff = Math.abs(arr1[l] - arr2[r]);
    if (curDiff < bestDiff) {
      bestDiff = curDiff;
      newArr = [arr1[l], arr2[r]];

      if (bestDiff === 0) {
        return newArr;
      }
    }

    if (arr1[l] < arr2[r]) {
      l++;
    } else if (arr2[r] < arr1[l]) {
      r++;
    }
  }

  return newArr;
};
