// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

// Adding test data
const arr = [];

for (let i = 0; i < 1000000; i++) {
  arr.push(Math.floor(Math.random() * 500));
}

var productOfLargestTwo = function(arr) {
  // My initial solution

  // arr.sort((a,b) => b - a);

  // return arr[0] * arr[1];

  let largest = null;
  let secondLargest = null;

  for (let i = 0; i < arr.length; i++) {
    const curNumber = arr[i];
    if (curNumber > largest || largest === null) {
      secondLargest = largest;
      largest = curNumber;
    } else if (curNumber > secondLargest || secondLargest === null){
      secondLargest = curNumber;
    }
  }

  return largest * secondLargest;
};

// Bootcamp Solution
var productOfLargestTwoSol = function (arr) {
  var largest = null;
  var secondLargest = null;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};

// Log answer and display time

console.time('timer2');
console.log(productOfLargestTwo(arr));
console.timeEnd('timer2');

console.time('timer');
console.log(productOfLargestTwoSol(arr));
console.timeEnd('timer');



