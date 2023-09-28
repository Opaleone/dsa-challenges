// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

const str = "nAtsuiPlwuan";
const sub = "Austin";

var permutationSubstring = function(str, sub) {
  let cnt = 0;
  const hash = {};

  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = true;
  }

  for (let i = 0; i < sub.length; i++) {
    if (sub[i] in hash) {
      cnt++;
    }
  }

  return cnt === sub.length;
};

console.time('exec_time');
console.log(permutationSubstring(str, sub));
console.timeEnd('exec_time');
