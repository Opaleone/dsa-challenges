let str1 = '';
let str2 = '';
const addLength = 10000000;

for (let i = 0; i < addLength; i++) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const random = Math.floor(Math.random() * 26);

  if (i === addLength - 1) {
    str2 += alphabet[random];
  } else {
    str1 += alphabet[random];
    str2 += alphabet[random];
  }
}

const oneEditAway = function(str1, str2) {
// TODO: Write function that takes in two strings and returns true if one character away, otherwise false
let charCnt = 0;

console.log(str1.length)
console.log(str2.length)

const length = (str1.length > str2.length) ? str1.length : str2.length;

for (let i = 0; i < length; i++) {
  if (str1[i] !== str2[i]) {
    charCnt++;
  }
}

return charCnt === 1;
}

const oneEditAwaySol = function(str1, str2) {

  if (str1 === str2 || Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  
  let index1 = 0;
  let index2 = 0;

  let editCount = 0;

  while (index1 < str1.length && index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      if (editCount === 1) {
        return false;
      }
      if (str1.length > str2.length) {
        index1++;
      } else if (str2.length < str1.length) {
        index2++;
      } else {
        index1++;
        index2++;
      }
      editCount++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

console.time("test_timer");
console.log(oneEditAway(str1, str2));
console.timeEnd("test_timer");

console.time("test_timer2");
console.log(oneEditAwaySol(str1, str2));
console.timeEnd("test_timer2");
