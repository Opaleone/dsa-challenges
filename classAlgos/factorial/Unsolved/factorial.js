// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  if (num === 0) return 1;
  num *= factorial(num - 1);
  return num;
};
