// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  let reverse = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  
  return reverse === str;
};

console.log(isPalindrome('racecar'))
