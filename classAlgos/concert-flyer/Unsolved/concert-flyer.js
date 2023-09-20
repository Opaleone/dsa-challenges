// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
  const magArr = magazine.split(' ');
  const flyArr = flyer.split(' ');

  let magHash = {};
  let flyHash = {};

  for (let i = 0; i < magArr.length; i++) {
    if (!magHash[magArr[i]]) magHash[magArr[i]] = 1;
    else magHash[magArr[i]]++;
  }

  for (let i = 0; i < flyArr.length; i++) {
    if (!flyHash[flyArr[i]]) flyHash[flyArr[i]] = 1;
    else flyHash[flyArr[i]]++;
  }

  for (const key in flyHash) {
    if (magHash[key] !== flyHash[key]) return false;
  }

  return true;
};
