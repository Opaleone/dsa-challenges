let _reverseString = (input) => {
  let outputString = '';
  for (let i = input.length - 1; i >= 0; i--) {
    outputString += input[i];
  }

  return outputString
}

console.log(_reverseString('Leone'));

const reverseString = (input) => {
  if (input === '') return '';

  return reverseString(input.substring(1))+input.charAt(0)
}


console.log(reverseString('Leone'))