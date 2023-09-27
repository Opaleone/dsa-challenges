const oneEditAway = function(str1, str2) {
// TODO: Write function that takes in two strings and returns true if one character away, otherwise false
  let charCnt = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      charCnt++;
    }
  }

  return charCnt === 1;
}
