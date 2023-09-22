// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var strA = "abc";
var strB = "cba";

var isAnagram = function(strA, strB) {
  const hash = {};
  const str1 = strA.split('');
  const str2 = strB.split('');
  let cnt = 0;
  
  for (let i = 0; i < str1.length; i++) {
    if (hash[str1[i]]) hash[str1[i]] = true;
    else hash[str1[i]] = true;
  }
  
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in hash) {
      cnt++
    }
  }

  if (cnt === strA.length) return true; 
  else return false;
};

console.log(isAnagram(strA, strB));
