// Function to check if given string is a palindrome

// Best solution Unhighlighted

let string = 'racecar';


// Solution 1
//    T: O(n^2) S: O(n)
// function isPalindrome(string) {
//   // Write your code here.
//   let reverse = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i];
//   }

//   return string === reverse;
// }

// Solution 2
//    Sliding window algo
//      T: O(n) S: O(1)

function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }

  return true;
}

// Solution 3
//    Double var in for loop
//      T: O(n)  S: O(n)

// function isPalindrome(string) {
//   for (let i = 0, j = string.length - 1; i < string.length; i++, j--) {
//     if (string[i] !== string[j]) return false;
//   }
//   return true;
// }

// Solution 4 - BAD
// NOT OPTIMAL DUE TO METHOD USAGE VASTLY INCREASING ST COMPLEXITY
//    Built-in Methods

// function isPalindrome(string) {
//   return string === string.split('').reverse('').join('');
// }

console.log(isPalindrome(string))