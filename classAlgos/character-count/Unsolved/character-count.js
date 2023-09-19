// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
  const hash = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] in hash) {
      hash[str[i]] = hash[str[i]] + 1;
    } else {
      hash[str[i]] = 1;
    }
  }
  return hash;
};
