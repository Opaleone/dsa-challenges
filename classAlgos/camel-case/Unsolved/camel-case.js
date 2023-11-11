// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
  const strArr = str.toLowerCase().split(' ');
  let camelCase = "";

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i];
    const letters = word.split('');

    if (i > 0) {
      letters[0] = letters[0].toUpperCase();
    }

    camelCase += letters.join('');
  }

  return camelCase;
};
