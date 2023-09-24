// Write a function that takes a positive integer and returns true if the integer is an armstrong number, 
// else return false. To find out if a number is an armstrong number, 
// take each individual digit and raise it to the power of the length of the entire number and add the digits. 
// If the sum equals the original number, the number is an armstrong number"

// TODO: Complete the function below:

var isArmstrong = function(num) {
  const numStr = num.toString().split('');
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += (numStr[i] ** numStr.length);
  }

  if (sum === num) return true;
  else return false;
};