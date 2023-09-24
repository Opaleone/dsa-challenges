// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
  let i = 0;

  while (true) {
    const square = i * i;

    if (square === num) return true;
    else if (square > num) return false;
    else i++;
  }
};

console.log(isPerfectSquare(9));
